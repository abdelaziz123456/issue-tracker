import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";

const issueSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must be at most 50 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(255, "Description must be at most 255 characters long"),
});
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  } else {
    const { title, description } = validation.data;
    const issue = await prisma.issue.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(issue, { status: 201 });
  }
};

export const GET = async () => {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues, { status: 200 });
};

export const DELETE = async (id: number) => {
  const issue = await prisma.issue.delete({
    where: {
      id,
    },
  });
  return NextResponse.json(issue, {
    status: 200,
    headers: { message: "Issue deleted successfully" },
  });
};
