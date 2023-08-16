import { NextResponse } from 'next/server';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
};

const getPayload = (content: string) => {
  return {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `The project description and the experiences gained from the project are as follows. 
        ${content}
        From the perspective of a frontend developer interviewer, 
        please suggest 5 improvements or additional items in Korean that should be included in the resume, based on the provided project content, technical stack, and individual contributions to the project.`,
      },
    ],
  };
};

export async function POST(req: Request) {
  const { content } = await req.json();

  try {
    const response = await fetch(OPENAI_URL, {
      method: 'POST',
      ...options,
      body: JSON.stringify(getPayload(content)),
    });

    if (!response.ok) {
      throw new Error('오류 발생');
    }

    const data = await response.json();

    const suggestion = data.choices[0].message.content;

    return NextResponse.json({ suggestion });
  } catch (error) {
    return NextResponse.json({ error, message: '잠시 후 다시 시도해주세요!' });
  }
}
