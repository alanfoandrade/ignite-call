'use client';

import { Calendar } from '@/components/Calendar';
import { Card } from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TimePicker } from './components/TimePicker';

interface BlockedDates {
  blockedWeekDays: number[];
}

export function CalendarStep() {
  const { username } = useParams();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isDateSelected = !!selectedDate;

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  const { data: blockedDates } = useQuery<BlockedDates>(
    ['blocked-dates', year, month],
    async () => {
      const response = await fetch(
        `/api/users/${username}/blocked-dates?year=${year}&month=${month}`,
      );

      const unavailableDates = await response.json();

      return unavailableDates;
    },
  );

  let timePickerOpenVariant = '';

  switch (isDateSelected) {
    case true:
      timePickerOpenVariant = 'grid-cols-[1fr_280px] max-md:grid-cols-1';

      break;

    case false:
      timePickerOpenVariant = 'w-[540px] grid-cols-1';

      break;
  }

  return (
    <Card
      className={twMerge(
        'relative mx-auto mb-0 mt-6 grid p-0 ',
        timePickerOpenVariant,
      )}
    >
      <Calendar
        blockedWeekDays={blockedDates?.blockedWeekDays ?? null}
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        onDateSelected={setSelectedDate}
        selectedDate={selectedDate}
      />

      {!!isDateSelected && (
        <TimePicker selectedDate={selectedDate} username={username} />
      )}
    </Card>
  );
}
