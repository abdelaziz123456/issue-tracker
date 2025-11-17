import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Issue } from "@/app/utils/types";

export const useIssuesPage = () => {
  const [issues, setIssues] = useState<Issue[] | null>([]);

  const fetchIssues = async () => {
    const response: AxiosResponse<Issue[]> = await axios.get("/api/issues");

    setIssues(response.data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return {
    issues,
  };
};
