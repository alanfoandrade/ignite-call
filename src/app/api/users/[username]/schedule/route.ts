import { prisma } from '@/lib/prisma';
import dayjs from 'dayjs';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createSchedulingBodySchema = z.object({
  date: z.string().datetime(),
  email: z.string().email(),
  name: z.string(),
  observations: z.string(),
});

export async function POST(
  request: NextRequest,
  { params }: { params: Record<string, string> },
) {
  const username = params.username;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return NextResponse.json(
      { message: 'User does not exist.' },
      { status: 400 },
    );
  }

  const requestBody = await request.json();

  const body = createSchedulingBodySchema.safeParse(requestBody);

  if (!body.success) {
    return NextResponse.json(
      {
        error: body.error,
      },
      { status: 400 },
    );
  }

  const { date, email, name, observations } = body.data;

  const scheculingDate = dayjs(date).startOf('hour');

  if (scheculingDate.isBefore(new Date())) {
    return NextResponse.json(
      {
        message: 'Date is in the past.',
      },
      { status: 400 },
    );
  }

  const conflictingScheduling = await prisma.scheduling.findFirst({
    where: {
      date: scheculingDate.toDate(),
      user_id: user.id,
    },
  });

  if (conflictingScheduling) {
    return NextResponse.json(
      {
        message: 'There is another scheduling at the same time.',
      },
      { status: 400 },
    );
  }

  await prisma.scheduling.create({
    data: {
      date: scheculingDate.toDate(),
      email,
      name,
      observations,
      user_id: user.id,
    },
  });

  return NextResponse.json({}, { status: 201 });
}
