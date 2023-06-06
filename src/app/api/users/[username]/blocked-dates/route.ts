import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string> },
) {
  const username = params.username;

  const { searchParams } = new URL(request.url);

  const year = searchParams.get('year');
  const month = searchParams.get('month');

  if (!year || !month) {
    return NextResponse.json(
      { message: 'Year or month not specified.' },
      { status: 400 },
    );
  }

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return NextResponse.json(
      { message: 'User does not exist.' },
      { status: 400 },
    );
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  });

  const blockedWeekDays = Array.from({ length: 7 })
    .map((_, index) => index)
    .filter(
      (weekDay) =>
        !availableWeekDays.some(
          (availableWeekDay) => availableWeekDay.week_day === weekDay,
        ),
    );

  return NextResponse.json({ blockedWeekDays });
}
