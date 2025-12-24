import axios from "axios";
import { Issue } from "../types";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export const useIssueDetails = () => {
  const params = useParams();
  const issueId = params.issueId as string;
  const [issueDetails, setIssueDetails] = useState<Issue | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deletionError, setDeletionError] = useState<string | null>(null);
  const [deletionLoading, setDeletionLoading] = useState<boolean>(false);
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

  const goToIssueEdit = () => {
    router.push(`/issues/${issueId}/edit`);
  };

  const deleteIssueHandler = () => {
    setDeletionLoading(true);
    axios
      .delete(`/api/issues/${issueId}`)
      .then((response) => {
        if (response.status === 200) {
          router.push("/issues");
          router.refresh();
        }
        setDeletionLoading(false);
      })
      .catch((error) => {
        setDeletionError(
          error?.response?.data?.error || "Something went wrong"
        );
        setDeletionLoading(false);
      });
  };

  useEffect(() => {
    getIssueDetails();
  }, [getIssueDetails]);
  return {
    getIssueDetails,
    issueDetails,
    isLoading,
    error,
    router,
    open,
    setOpen,
    goToIssueEdit,
    deleteIssueHandler,
    deletionError,
    setDeletionError,
    deletionLoading,
  };
};
