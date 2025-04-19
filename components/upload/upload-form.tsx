"use client";
import { useState } from "react";
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
      "File size must be less than 20 MB",
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF",
    ),
});

const UploadForm = () => {
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast("Uploaded successfully!");
      setIsUploading(false);
    },
    onUploadError: () => {
      toast("Error occurred while uploading...");
      setIsUploading(false);
    },
    onUploadBegin: () => {
      toast("Upload has begun...");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      toast("Invalid file");
      setIsUploading(false);
      return;
    }

    const resp = await startUpload([file]);
    if (!resp) {
      toast("Something went wrong!");
      setIsUploading(false);
      return;
    }

    toast("PDF Uploaded....");

    // @ts-expect-error - generatePDFSummary type definition is missing
    const result = await generatePDFSummary(resp);
    const { data = null } = result || {};
    if (data) {
      toast("Saving PDF.....");
    }

    setIsUploading(false);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} isUploading={isUploading} />
    </div>
  );
};

export default UploadForm;
