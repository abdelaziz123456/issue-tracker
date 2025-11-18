"use client";
import React from "react";
import { useIssuesPage } from "../utils/hooks";
import { Text } from "@radix-ui/themes";

const Issues = () => {
  const { issues } = useIssuesPage();

  return (
    <div>
      <Text size="6">Issues</Text>
      <ul>
        {issues?.map((issue) => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Issues;
