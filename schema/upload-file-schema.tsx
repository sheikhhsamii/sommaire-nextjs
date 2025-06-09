import { z } from "zod";

export const UploadFileSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB"
    )
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed"
    ),
});

export type UploadFileType = z.infer<typeof UploadFileSchema>;
