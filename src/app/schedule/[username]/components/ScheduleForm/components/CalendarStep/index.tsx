'use client';

import { Calendar } from '@/components/Calendar';
import { Card } from '@/components/Card';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TimePicker } from './components/TimePicker';

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isDateSelected = !!selectedDate;

  async function handleSelectDate(date: Date | null) {
    // await fetch(`/api/users/alan-andrade/availability`, { cache: 'no-cache' });

    setSelectedDate(date);
  }

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
      <Calendar onDateSelected={handleSelectDate} selectedDate={selectedDate} />

      {selectedDate && <TimePicker selectedDate={selectedDate} />}
    </Card>
  );
}
