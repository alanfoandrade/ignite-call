import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // eslint-disable-next-line no-console
  console.log(request);
  return NextResponse.json({ ok: true }, { status: 200 });
}
