// // /app/api/chat/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 300,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return new Response(JSON.stringify({ reply: response }), {
      status: 200,
    });

  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({ reply: "Oops! Something went wrong with Gemini." }),
      { status: 500 }
    );
  }
}
