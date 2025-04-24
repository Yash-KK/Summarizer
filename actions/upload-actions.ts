"use server";

import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface PdfSummaryType {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

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
    }
  ]
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
            geminiError
          );

          throw new Error(
            "Failed to generate summary with available AI providers"
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

    const formattedFileName = formatFileNameAsTitle(fileName);

    return {
      success: true,
      message: "summary generated",
      data: {
        title: formattedFileName,
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

const savePdfSummary = async ({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) => {
  try {
    const sql = await getDbConnection();
    const [insertedSummary] = await sql`
      INSERT INTO pdf_summaries (
        user_id,
        original_file_url,
        summary_text,
        title,
        file_name
      ) VALUES (
        ${userId},
        ${fileUrl},
        ${summary},
        ${title},
        ${fileName}
      )
      RETURNING id;
    `;
    return insertedSummary;
  } catch (error: unknown) {
    console.error("Error saving PDF summary", error);
    throw error;
  }
};

export const storePdfSummaryAction = async ({
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) => {
  // user logged in

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let savedSummary: any;

  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "user not found",
      };
    }
    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save PDF summary, please try again...",
      };
    }
  } catch (error: unknown) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF Summary",
    };
  }

  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: "PDF summary saved successfully!",
    data: {
      id: savedSummary.id,
    },
  };
};
