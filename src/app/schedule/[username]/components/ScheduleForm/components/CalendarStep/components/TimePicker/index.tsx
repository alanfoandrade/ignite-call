'use client';

import { Text } from '@/components/Text';
import dayjs from 'dayjs';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { TimePickerItem } from './components/TimePickerItem';

interface LoadAvailabilityProps {
  date: string; // YYYY-MM-DD
  username: string;
}

interface Availability {
  availableTimes: number[];
  possibleTimes: number[];
}

interface TimePickerProps {
  selectedDate: Date;
  username: string;
}

export function TimePicker({ selectedDate, username }: TimePickerProps) {
  const [availability, setAvailability] = useState<Availability | null>(null);

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null;

  const monthDay = selectedDate
    ? dayjs(selectedDate).format(`DD[ de ]MMMM`)
    : null;

  useEffect(() => {
    async function loadAvailability({ date, username }: LoadAvailabilityProps) {
      try {
        const response = await fetch(
          `/api/users/${username}/availability?date=${date}`,
        );

        const availabilityData: Availability = await response.json();

        setAvailability(availabilityData);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }

    loadAvailability({
      date: dayjs(selectedDate).format('YYYY-MM-DD'),
      username,
    });
  }, [selectedDate, username]);

  return (
    <div className="absolute bottom-0 right-0 top-0 w-[280px] overflow-y-scroll border-l border-l-gray-600 px-6 pt-6">
      <Text className="font-medium">
        {weekDay}{' '}
        <Text as="span" className="text-gray-200">
          {monthDay}
        </Text>
      </Text>

      <div className="mt-3 grid grid-cols-1 gap-2 max-md:grid-cols-2">
        {availability?.possibleTimes.map((hour) => (
          <TimePickerItem
            key={hour}
            disabled={!availability.availableTimes.includes(hour)}
          >
            {String(hour).padStart(2, '0')}:00h
          </TimePickerItem>
        ))}
      </div>
    </div>
  );
}
