import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { currentUser } from "@clerk/nextjs/server";
const f = createUploadthing();

export const ourFileUploader = {
  pdfUploader: f({
    pdf: { maxFileSize: "32MB" },
  })
    .middleware(async ({}) => {
      //GET USER INFO

      const user = await currentUser();

      if (!user) throw new UploadThingError("UnAuthorized!");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("upload completed for userId", metadata.userId);
      console.log("file url", file.url);
      return { userId: metadata.userId, file: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileUploader;
