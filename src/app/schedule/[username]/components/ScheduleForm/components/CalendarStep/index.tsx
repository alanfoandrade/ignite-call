'use client';

import { Calendar } from '@/components/Calendar';
import { Card } from '@/components/Card';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TimePicker } from './components/TimePicker';

export function CalendarStep() {
  const { username } = useParams();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isDateSelected = !!selectedDate;

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
      <Calendar onDateSelected={setSelectedDate} selectedDate={selectedDate} />

      {!!isDateSelected && (
        <TimePicker selectedDate={selectedDate} username={username} />
      )}
    </Card>
  );
}
