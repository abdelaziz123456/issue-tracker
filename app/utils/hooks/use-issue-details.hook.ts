import axios from "axios";
import { Issue } from "../types";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useIssueDetails = (issueId: string) => {
  const [issueDetails, setIssueDetails] = useState<Issue | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const getIssueDetails = useCallback(async () => {
    try {
      const response = await axios.get(`/api/issues/${issueId}`);
      if (response.status === 200) {
        setIssueDetails(response.data);
        setIsLoading(false);
      }

      return;
    } catch (error: any) {
      setError(error.response.data.error);
      setIsLoading(false);
      return;
    }
  }, [issueId]);

  useEffect(() => {
    getIssueDetails();
  }, [getIssueDetails]);
  return {
    getIssueDetails,
    issueDetails,
    isLoading,
    error,
    router,
  };
};
