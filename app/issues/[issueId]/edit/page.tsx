"use client";
import { useIssueDetails } from "@/app/utils";
import { IssueForm } from "@components";
import React, { use } from "react";

const EditPage = ({ params }: { params: Promise<{ issueId: string }> }) => {
  const resolvedparams = use(params);
  const { issueId } = resolvedparams;
  const { issueDetails, error, router } = useIssueDetails(issueId);

  return (
    <div>
      {issueDetails && (
        <IssueForm
          initialValues={{
            title: issueDetails?.title,
            description: issueDetails?.description,
          }}
        />
      )}
    </div>
  );
};

export default EditPage;
