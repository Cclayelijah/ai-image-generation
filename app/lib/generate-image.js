import { NextResponse } from "next/server"

import { OpenAI } from 'openai';

// console.log(process.env["OPENAI_API_KEY"])

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "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",
    dangerouslyAllowBrowser: true
})


export async function generateImages(input) {
    const response = await openai.images.generate({
        prompt: input,
        n: 4,
        size: "512x512",
        // 256, 512, 1024
        // response_format: "b64_json",
    })

    return NextResponse.json({images: response.data})
}