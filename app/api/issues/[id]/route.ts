import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../validationSchemas";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = await parseInt(params.id);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params?.id) },
  });

  if (!issue) {
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });
  }

  return NextResponse.json(issue, { status: 200 });
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  } else {
    const { title, description } = validation.data;
    const issue = await prisma.issue.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(issue, { status: 200 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = await parseInt(params.id);
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
