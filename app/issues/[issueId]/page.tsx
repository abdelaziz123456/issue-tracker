"use client";
import { mappedIssues, useIssueDetails } from "@/app/utils";
import { AlertDialog, Badge, Button, Text } from "@radix-ui/themes";
import React, { use, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Pencil2Icon, EraserIcon } from "@radix-ui/react-icons";
import Loading from "./loading";

const IssueDetails = ({ params }: { params: Promise<{ issueId: string }> }) => {
  const resolvedparams = use(params);
  const { issueId } = resolvedparams;
  const { issueDetails, error, router } = useIssueDetails(issueId);
  const [open, setOpen] = useState(false);

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
    <div className="grid grid-cols-4 p-3 items-center gap-y-4 sm:gap-0">
      <div className="col-span-4 sm:col-span-3 flex gap-6 flex-col px-2">
        <Text size="7" className="text-start">
          {issueDetails?.title}
        </Text>

        <div className="flex items-center gap-8  ">
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

        <div className="border w-100  w-full  px-2 py-4 rounded-xl max-w-[600px]">
          <MarkdownPreview
            source={issueDetails?.description || ""}
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          />
        </div>
      </div>
      <div className="col-span-4 sm:col-span-1 px-2">
        <div className="flex flex-col gap-2 ">
          <Button
            variant="solid"
            onClick={() => router.push(`/issues/${issueId}/edit`)}
          >
            Edit Issue <Pencil2Icon className="ml-2" />
          </Button>
          <Button variant="solid" color="red" onClick={() => setOpen(true)}>
            Delete Issue
          </Button>
        </div>
      </div>

      {/* confirm modal  */}

      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Content className="flex flex-col gap-4">
          <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
          <AlertDialog.Description className=" flex flex-col gap-4">
            are you saure you want to delete this issue ? This action cannot be
            undone.
            <div className="mt-4 flex gap-2 justify-start">
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                color="red"
                onClick={() => console.log("deleted")}
              >
                Confirm
              </Button>
            </div>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default IssueDetails;
