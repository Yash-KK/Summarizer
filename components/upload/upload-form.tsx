"use client";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { toast } from "sonner";

import { z } from "zod";
import { generatePDFSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20 MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});
const UploadForm = () => {
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast("uploaded successfully!");
    },
    onUploadError: () => {
      toast("error occurred while uploading...");
    },
    onUploadBegin: () => {
      toast("upload has begun...");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the fields
    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
      toast("invalid file");
      return;
    }

    // upload the file to 'uploadthing'
    const resp = await startUpload([file]);
    if (!resp) {
      toast("something went wrong!");
      return;
    }
    toast("PDF Uploaded....");

    // parse the pdf using langchain

    // @ts-expect-error - generatePDFSummary type definition is missing
    const summary = await generatePDFSummary(resp);
    console.log("summary: ", summary);

  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
