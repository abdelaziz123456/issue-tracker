"use client";
import React, { use } from "react";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import { Controller } from "react-hook-form";
import { useIssueForm } from "@/app/utils";
import { ErrorMesssage } from "../atoms";
import MDEditor from "@uiw/react-md-editor";
import { usePathname, useRouter } from "next/navigation";

import { Issue } from "@/app/utils/types";

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isValid,
    beError,
    onUpdate,
  } = useIssueForm(issue);
  const path = usePathname();
  const isEditMode = path.includes("edit");
  console.log("object", issue);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-7 my-6 mx-4"
    >
      {beError && (
        <Callout.Root color="red">
          <Callout.Text>{beError}</Callout.Text>
        </Callout.Root>
      )}
      <Controller
        name="title"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters long",
          },
        }}
        render={({ field }) => (
          <div className="gap-0">
            <TextField.Root placeholder="Title " {...field} />

            <ErrorMesssage error={errors?.title?.message || ""} />
          </div>
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: "Description must be at least 3 characters long",
          },
        }}
        render={({ field }) => (
          <div className="mt-2 gap-0">
            <MDEditor
              {...field}
              className="mb-0 pb-0"
              textareaProps={{
                style: {
                  background: "transparent",
                },
              }}
              preview="edit"
              style={{ background: "transparent", color: "inherit" }}
            />
            <ErrorMesssage error={errors.description?.message || ""} />
          </div>
        )}
      />
      {isEditMode ? (
        <Button
          variant="solid"
          className="max-w-[200px]"
          onClick={handleSubmit(onUpdate)}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? <Spinner size="3" /> : "Update Issue"}
        </Button>
      ) : (
        <Button
          variant="solid"
          className="max-w-[200px]"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? <Spinner size="3" /> : "Submit New Issue"}
        </Button>
      )}
    </form>
  );
};

export default IssueForm;
