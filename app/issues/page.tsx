"use client";
import React from "react";
import { useIssuesPage } from "../utils/hooks";
import { Badge, Skeleton, Spinner, Table } from "@radix-ui/themes";

const Issues = () => {
  const { issues, mappedIssues, isLoading } = useIssuesPage();

  return isLoading ? (
    <div className="flex items-center min-h-[30vh] justify-center ">
      <Spinner />
    </div>
  ) : (
    <div>
      <div className="mb-4 mt-7 ">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:block">
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues?.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>{issue.title}</Table.Cell>
                <Table.Cell className="hidden md:block">
                  {issue.description}
                </Table.Cell>
                <Table.Cell>
                  <Badge color={mappedIssues[issue.status].color as any}>
                    {mappedIssues[issue.status].text}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  {issue.createdAt
                    ? new Date(issue.createdAt).toLocaleDateString()
                    : "N/A"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default Issues;
