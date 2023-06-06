'use client';

import { Calendar } from '@/components/Calendar';
import { Card } from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TimePicker } from './components/TimePicker';

interface BlockedDates {
  blockedDates: number[];
  blockedWeekDays: number[];
}

interface CalendarStepProps {
  onSelectDateTime: (date: Date) => void;
}

export function CalendarStep({ onSelectDateTime }: CalendarStepProps) {
  const { username } = useParams();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isDateSelected = !!selectedDate;

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth() + 1;

  const { data: unavailableDates } = useQuery<BlockedDates>(
    ['blocked-dates', year, month],
    async () => {
      const response = await fetch(
        `/api/users/${username}/blocked-dates?year=${year}&month=${month}`,
      );

      return response.json();
    },
  );

  let timePickerOpenVariant = '';

  switch (isDateSelected) {
    case true:
      timePickerOpenVariant =
        'grid-cols-[1fr_280px] max-md:grid-cols-1 max-md:w-[540px] max-md:grid-rows-[1fr_300px]';

      break;

    case false:
      timePickerOpenVariant = 'w-[540px] grid-cols-1';

      break;
  }

  return (
    <Card
      className={twMerge(
        'relative mx-auto mb-0 mt-6 grid p-0',
        timePickerOpenVariant,
      )}
    >
      <Calendar
        unavailableDates={unavailableDates ?? null}
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        onDateSelected={setSelectedDate}
        selectedDate={selectedDate}
      />

      {!!isDateSelected && (
        <TimePicker
          selectedDate={selectedDate}
          username={username}
          onSelectDateTime={onSelectDateTime}
        />
      )}
    </Card>
  );
}
