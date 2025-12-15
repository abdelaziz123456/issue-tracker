"use client";
import React from "react";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import { Controller } from "react-hook-form";
import { useIssueForm } from "@/app/utils";
import { ErrorMesssage } from "../atoms";
import dynamic from "next/dynamic";
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
  const ClientSimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });
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
            <ClientSimpleMdeReact {...field} className="mb-0 pb-0" />
            <ErrorMesssage error={errors.description?.message || ""} />
          </div>
        )}
      />

      <Button
        variant="solid"
        className="max-w-[200px]"
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? <Spinner size="3" /> : "Submit New Issue"}
      </Button>
    </form>
  );
};

export default IssueForm;
