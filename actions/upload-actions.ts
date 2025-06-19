"use server";

import { fetchAndExtractText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/open-ai";

export async function generatePdfSummary(uploadResponse: {
  serverData: {
    userId: string;
    file: {
      url: string;
      name: string;
    };
  };
}) {
  if (!uploadResponse) {
    return {
      success: false,
      error: "File Upload Failed",
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
      error: "File Upload Failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractText(pdfUrl);
    console.log({ pdfText });
    let summary;
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
      console.log({ summary });
    } catch (error) {
      console.log({ error });

      //Call GEMINI API
    //   const geminiResponse = await generateSummaryFromGemini(pdfText);
    //   console.log({ geminiResponse });
    }
    if (!summary) {
      return {
        success: false,
        error: "Failed to generate summary",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "File Upload Failed",
      data: null,
    };
  }
}
