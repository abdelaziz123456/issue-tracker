"use client";
import React from "react";
import { useIssuesPage } from "../utils/hooks";
<<<<<<< HEAD
import { Badge, Link, Spinner, Table } from "@radix-ui/themes";
import { mappedIssues } from "../utils";

=======
import { Badge, Link, Table } from "@radix-ui/themes";
import { mappedIssues } from "../utils";
import { Skeleton } from "@components";
>>>>>>> 266d215 (finish viewing issies implementation)
const Issues = () => {
  const { issues, isLoading } = useIssuesPage();

  return (
    <div>
      <div className="mb-4 mt-7 ">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row className="grid grid-cols-6 md:grid-cols-11">
              <Table.ColumnHeaderCell className="col-span-2">
                Issue
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:block md:col-span-5">
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="col-span-2">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="col-span-2">
                Created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
<<<<<<< HEAD
          <Table.Body>
            {issues?.map((issue) => (
              <Table.Row
                key={issue.id}
                className="cursor-pointer hover:bg-blue-50"
              >
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                </Table.Cell>
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
=======
          <Table.Body className="w-full ">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <Table.Row
                    key={i}
                    className="cursor-pointer hover:bg-blue-50 w-full grid-cols-6 grid md:grid-cols-11"
                  >
                    <Table.Cell className="col-span-2">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="hidden md:block md:col-span-5 truncate">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="col-span-2">
                      <Skeleton />
                    </Table.Cell>
                    <Table.Cell className="col-span-2">
                      <Skeleton />
                    </Table.Cell>
                  </Table.Row>
                ))
              : issues?.map((issue) => (
                  <Table.Row
                    key={issue.id}
                    className="cursor-pointer hover:bg-blue-50 w-full grid-cols-6 grid md:grid-cols-11"
                  >
                    <Table.Cell className="col-span-2">
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    </Table.Cell>
                    <Table.Cell className="hidden md:block md:col-span-5 truncate">
                      {issue.description}
                    </Table.Cell>
                    <Table.Cell className="col-span-2">
                      <Badge color={mappedIssues[issue.status].color as any}>
                        {mappedIssues[issue.status].text}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell className="col-span-2">
                      {issue.createdAt
                        ? new Date(issue.createdAt).toLocaleDateString()
                        : "N/A"}
                    </Table.Cell>
                  </Table.Row>
                ))}
>>>>>>> 266d215 (finish viewing issies implementation)
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default Issues;
