import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async () => {
      try {
        const { userId } = await auth();

        if (!userId) {
          throw new UploadThingError("Unauthorized - No user found");
        }

        return { userId };
      } catch (error) {
        console.error("Middleware error:", error);
        throw new UploadThingError("Authentication failed");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed for userId:", metadata.userId);
      console.log("File URL:", file.url);
      return { userId: metadata.userId, file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
