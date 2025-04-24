import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { currentUser } from "@clerk/nextjs/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async () => {
      // user info
      const user = await currentUser();
      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    // @ts-expect-error: Returning file as part of the upload completion response, which conflicts with expected return type
    .onUploadComplete(async ({ metadata, file }) => {
      return { userId: metadata.userId, file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
