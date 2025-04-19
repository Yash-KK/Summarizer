"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";

export const generatePDFSummary = async (uploadResponse: [{
  serverData: {
    userId: string;
    file: {
      url: string;
      name: string;
    };
  };
}]) => {
  if (!uploadResponse) {
    return {
      success: false,
      message: "file upload failed!",
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      success: false,
      message: "file upload failed!",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);

    return {
        success: true,
        message: 'summary generated',
        data: pdfText
    }
  } catch (err) {
    return {
      success: false,
      message: "file upload failed!",
      data: null,
      error: err,
    };
  }
};
