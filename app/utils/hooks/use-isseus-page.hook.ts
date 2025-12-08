import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Issue } from "@/app/utils/types";
import { useRouter } from "next/navigation";

export const useIssuesPage = () => {
  const [issues, setIssues] = useState<Issue[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const fetchIssues = async () => {
    setIsLoading(true);
    const response: AxiosResponse<Issue[]> = await axios.get("/api/issues");

    setIssues(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return {
    issues,

    isLoading,
    router,
  };
};
