"use client";
import { mappedIssues, useIssueDetails } from "@/app/utils";
<<<<<<< HEAD
import { Badge, Spinner, Text } from "@radix-ui/themes";
import React, { use } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
=======
import { Badge, Text } from "@radix-ui/themes";
import React, { use } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Skeleton } from "@components";
>>>>>>> 266d215 (finish viewing issies implementation)

const IssueDetails = ({ params }: { params: Promise<{ issueId: string }> }) => {
  const resolvedparams = use(params);
  const { issueId } = resolvedparams;
  const { issueDetails, isLoading, error, router } = useIssueDetails(issueId);
<<<<<<< HEAD
  // if (isLoading) {
  //   return (
  //     <div className="flex items-center min-h-[30vh] justify-center ">
  //       <Spinner />
  //     </div>
  //   );
  // }
=======
>>>>>>> 266d215 (finish viewing issies implementation)

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

  return (
    <div className="my-7 flex flex-col justify-start items-start gap-x-2 gap-y-6">
      <Text size="7" className="text-start">
        {issueDetails?.title || <Skeleton width={200} />}
      </Text>

      <div className="flex items-center gap-2 ">
<<<<<<< HEAD
        <Badge
          color={mappedIssues[issueDetails?.status || "TODO"].color as any}
        >
          {mappedIssues[issueDetails?.status || "TODO"].text}
        </Badge>

        <Text size="2">
          {issueDetails?.createdAt ? (
=======
        {!issueDetails ? (
          <Skeleton width={50} />
        ) : (
          <Badge
            color={mappedIssues[issueDetails?.status || "TODO"].color as any}
          >
            {mappedIssues[issueDetails?.status || "TODO"].text}
          </Badge>
        )}

        <Text size="2">
          {issueDetails ? (
>>>>>>> 266d215 (finish viewing issies implementation)
            new Date(issueDetails?.createdAt || "").toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )
          ) : (
            <Skeleton width={80} />
          )}
        </Text>
      </div>
      <div className="border  md:w-[70vw] px-2 py-4 rounded-xl">
<<<<<<< HEAD
        <MarkdownPreview
          source={issueDetails?.description || ""}
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        />
=======
        {issueDetails ? (
          <MarkdownPreview
            source={issueDetails?.description || ""}
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          />
        ) : (
          <Skeleton width={"full"} />
        )}
>>>>>>> 266d215 (finish viewing issies implementation)
      </div>
    </div>
  );
};

export default IssueDetails;
