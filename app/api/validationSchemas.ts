import z from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must be at most 50 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(255, "Description must be at most 255 characters long"),
});
