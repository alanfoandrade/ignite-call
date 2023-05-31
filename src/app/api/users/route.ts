import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // eslint-disable-next-line no-console
  console.log(request);
  return NextResponse.json(request.body, { status: 200 });
}
