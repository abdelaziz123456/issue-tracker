import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Issue, IssueStatusEnum } from "@/app/utils/types";

export const useIssuesPage = () => {
  const [issues, setIssues] = useState<Issue[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchIssues = async () => {
    setIsLoading(true);
    const response: AxiosResponse<Issue[]> = await axios.get("/api/issues");

    setIssues(response.data);
    setIsLoading(false);
  };

  const mappedIssues = {
    [IssueStatusEnum.TODO]: {
      color: "orange",
      text: "To Do",
    },
    [IssueStatusEnum.IN_PROGRESS]: {
      color: "blue",
      text: "In Progress",
    },
    [IssueStatusEnum.DONE]: {
      color: "green",
      text: "Done",
    },
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return {
    issues,
    mappedIssues,
    isLoading,
  };
};
