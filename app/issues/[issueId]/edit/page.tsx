"use client";
import { useIssueDetails } from "@/app/utils";
import { FormSkeleton } from "@components";
import dynamic from "next/dynamic";
import React from "react";

const EditPage = () => {
  const { issueDetails } = useIssueDetails();
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
