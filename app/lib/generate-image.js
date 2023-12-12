import { NextResponse } from "next/server"

import { OpenAI } from 'openai';

// let key = process.env.OPENAI_API_KEY

let openai = new OpenAI({
    apiKey: 'OPENAI_API_KEY',
    dangerouslyAllowBrowser: true
})


export async function generateImages(input) {
    console.log(process.env.OPENAI_API_KEY)
    openai.apiKey = process.env.OPENAI_API_KEY
    const response = await openai.images.generate({
        prompt: input,
        n: 4,
        size: "512x512",
        // 256, 512, 1024
        // response_format: "b64_json",
    })

    return NextResponse.json({images: response.data})
}