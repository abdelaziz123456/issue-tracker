"use client";
import { mappedIssues, useIssueDetails } from "@/app/utils";
import { Badge, Button, Text } from "@radix-ui/themes";
import React, { use } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Skeleton } from "@components";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Loading from "./loading";

const IssueDetails = ({ params }: { params: Promise<{ issueId: string }> }) => {
  const resolvedparams = use(params);
  const { issueId } = resolvedparams;
  const { issueDetails, error, router } = useIssueDetails(issueId);

  if (error) {
    return (
      <div className="flex flex-col items-center min-h-[70vh] gap-8 justify-center ">
        <Text color="red">{error}</Text>
        <div className="flex items-center gap-2 cursor-pointer mt-6">
          <Text
            className="max-w-[200px]"
            onClick={() => router.push("/issues")}
          >
            back to Issues Page
          </Text>
        </div>
      </div>
    );
  }

  if (!issueDetails) return <Loading />;
  return (
    <div className="my-7 flex flex-col justify-start items-start gap-x-2 gap-y-6">
      <Text size="7" className="text-start">
        {issueDetails?.title}
      </Text>
      <div className="flex justify-between w-[70vw]  items-center ">
        <div className="flex items-center gap-2 ">
          <Badge
            color={mappedIssues[issueDetails?.status || "TODO"].color as any}
          >
            {mappedIssues[issueDetails?.status || "TODO"].text}
          </Badge>

          <Text size="2">
            {new Date(issueDetails?.createdAt || "").toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </Text>
        </div>

        <Button
          variant="solid"
          onClick={() => router.push(`/issues/${issueId}/edit`)}
        >
          Edit Issue <Pencil2Icon className="ml-2" />
        </Button>
      </div>

      <div className="border  md:w-[70vw] px-2 py-4 rounded-xl">
        <MarkdownPreview
          source={issueDetails?.description || ""}
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        />
      </div>
    </div>
  );
};

export default IssueDetails;
