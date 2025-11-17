"use client";
import React from "react";
import { Button, Callout, TextField } from "@radix-ui/themes";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller } from "react-hook-form";
import { useIssueForm } from "../hooks";
const IssueForm = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isValid,
    beError,
  } = useIssueForm();
  console.log("errors", errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-3 my-6 mx-4"
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
          <TextField.Root placeholder="Title " {...field} />
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
        render={({ field }) => <SimpleMdeReact {...field} />}
      />

      <Button
        variant="solid"
        className="max-w-[200px]"
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid || isSubmitting}
      >
        Submit New Issue
      </Button>
    </form>
  );
};

export default IssueForm;
