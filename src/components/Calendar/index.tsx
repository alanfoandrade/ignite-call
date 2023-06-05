'use client';

import { getWeekDays } from '@/utils/get-week-days';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Text } from './../Text';
import { CalendarActionButton } from './components/CalendarActionButton';
import { CalendarDay } from './components/CalendarDay';

interface CalendarWeek {
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
  week: number;
}

type CalendarWeeks = CalendarWeek[];

interface CalendarProps {
  onDateSelected: (date: Date | null) => void;
  selectedDate: Date | null;
}

export function Calendar({ onDateSelected, selectedDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => dayjs().set('date', 1));

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month');

    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month');

    setCurrentDate(nextMonthDate);
  }

  const shortWeekdays = getWeekDays({ short: true });

  const currentMonth = currentDate.format('MMMM');

  const currentYear = currentDate.format('YYYY');

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, index) => currentDate.set('date', index + 1));

    const firstWeekDay = currentDate.get('day');

    const previousMonthFillArray = Array.from({ length: firstWeekDay })
      .map((_, index) => currentDate.subtract(index + 1, 'day'))
      .reverse();

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    );

    const lastWeekDay = lastDayInCurrentMonth.get('day');

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, index) => lastDayInCurrentMonth.add(index + 1, 'day'));

    const calendarDays = [
      ...previousMonthFillArray.map((date) => ({ date, disabled: true })),
      ...daysInMonthArray.map((date) => ({
        date,
        disabled: date.endOf('day').isBefore(new Date()),
      })),
      ...nextMonthFillArray.map((date) => ({ date, disabled: true })),
    ];

    const calendarWeeksArray = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, index, original) => {
        const isNewWeek = index % 7 === 0;

        if (isNewWeek) {
          weeks.push({
            days: original.slice(index, index + 7),
            week: index / 7 + 1,
          });
        }

        return weeks;
      },
      [],
    );

    return calendarWeeksArray;
  }, [currentDate]);

  function handleSelectDate(date: Date) {
    if (selectedDate?.getTime() === date.getTime()) {
      return onDateSelected(null);
    }

    onDateSelected(date);
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <Text className="font-medium capitalize">
          {currentMonth}{' '}
          <Text as="span" className="text-gray-200">
            {currentYear}
          </Text>
        </Text>

        <div className="flex gap-2 text-gray-200">
          <CalendarActionButton
            type="button"
            onClick={handlePreviousMonth}
            title="Previous Month"
          >
            <ChevronLeft />
          </CalendarActionButton>

          <CalendarActionButton
            type="button"
            onClick={handleNextMonth}
            title="Next Month"
          >
            <ChevronRight />
          </CalendarActionButton>
        </div>
      </div>

      <table className="w-full table-fixed border-spacing-1 font-sans">
        <thead>
          <tr>
            {shortWeekdays.map((weekDay) => (
              <th
                key={weekDay}
                className="pb-4 text-sm font-medium text-gray-200"
              >
                {weekDay}.
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendarWeeks.map(({ days, week }) => (
            <tr key={week}>
              {days.map(({ date, disabled }) => (
                <CalendarDay
                  key={date.toString()}
                  disabled={disabled}
                  onClick={() => handleSelectDate(date.toDate())}
                >
                  {date.get('date')}
                </CalendarDay>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
