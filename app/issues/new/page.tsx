import React from "react";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { FormSkeleton } from "@components";

const NewIssue = () => {
  const IssueForm = dynamic(
    () => import("@components").then((mod) => mod.IssueForm),
    {
      loading: () => <FormSkeleton />,
    }
  );
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssue;
