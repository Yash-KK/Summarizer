"use server";

import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

export const generatePDFSummary = async (
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    },
  ],
) => {
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

    let summary;
    try {
      summary = await generateSummaryFromGemini(pdfText);
    } catch (error) {
      if (error instanceof Error) {
        try {
          summary = await generateSummaryFromOpenAI(pdfText);
        } catch (geminiError) {
          console.error(
            "Gemini API failed after OPENAI quote exceeded",
            geminiError,
          );

          throw new Error(
            "Failed to generate summary with available AI providers",
          );
        }
      }
      console.log("error: ", error);
    }

    if (!summary) {
      return {
        success: false,
        message: "failed to generated summary",
        data: null,
      };
    }
    return {
      success: true,
      message: "summary generated",
      data: {
        summary,
      },
    };
  } catch (err) {
    return {
      success: false,
      message: "file upload failed!",
      data: null,
      error: err,
    };
  }
};
