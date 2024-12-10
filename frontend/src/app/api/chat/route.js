import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai } from '@/lib/ai';

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are an AI interview assistant helping candidates prepare for job interviews. Provide clear, concise, and professional responses.'
      },
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
} 