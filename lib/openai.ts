import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import OPENAI from "openai";

const openai = new OPENAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateSummaryFromOpenAI = async (pdfText: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: SUMMARY_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting: \n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });
    return completion.choices[0].message.content;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
