"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isUploading: boolean;
}
const UploadFormInput: React.FC<UploadFormInputProps> = ({
  onSubmit,
  isUploading,
}) => {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex justify-end items-center gap-1.5">
        <Input
          id="file"
          type="file"
          name="file"
          accept="application/pdf"
          required
          disabled={isUploading}
        />
        <Button type="submit" disabled={isUploading}>
          {isUploading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
          Upload your PDF
        </Button>
      </div>
    </form>
  );
};

export default UploadFormInput;
