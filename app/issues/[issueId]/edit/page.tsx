"use client";
import { useIssueDetails } from "@/app/utils";
import { FormSkeleton, Skeleton } from "@components";
import dynamic from "next/dynamic";
import React, { use } from "react";

const EditPage = ({ params }: { params: Promise<{ issueId: string }> }) => {
  const resolvedparams = use(params);
  const { issueId } = resolvedparams;
  const { issueDetails } = useIssueDetails(issueId);
  const IssueForm = dynamic(
    () => import("@components").then((mod) => mod.IssueForm),
    {
      ssr: false,
      loading: () => <FormSkeleton />,
    }
  );
  return <div>{issueDetails && <IssueForm issue={issueDetails} />}</div>;
};

export default EditPage;
