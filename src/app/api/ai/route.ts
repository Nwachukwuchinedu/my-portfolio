import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = "openai/gpt-oss-120b"; // 120B model as it's the largest/most powerful Production model in the guide

export async function POST(request: Request) {
    if (!process.env.GROQ_API_KEY) {
        return NextResponse.json({ error: "GROQ_API_KEY not configured on server" }, { status: 500 });
    }

    try {
        const { messages, temperature = 0.7, max_tokens = 200 } = await request.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        const chatCompletion = await groq.chat.completions.create({
            messages,
            model: MODEL,
            temperature,
            max_completion_tokens: max_tokens,
        });

        const content = chatCompletion.choices[0]?.message?.content || "";
        return NextResponse.json({ content });
    } catch (error: any) {
        console.error("Groq SDK Error:", error);
        return NextResponse.json({ error: error.message || "Failed to generate AI response" }, { status: 500 });
    }
}
