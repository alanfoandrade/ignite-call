import { Text } from '@/components/Text';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { TimePickerItem } from './components/TimePickerItem';

interface Availability {
  availableTimes: number[];
  possibleTimes: number[];
}

interface TimePickerProps {
  onSelectDateTime: (date: Date) => void;
  selectedDate: Date;
  username: string;
}

export function TimePicker({
  onSelectDateTime,
  selectedDate,
  username,
}: TimePickerProps) {
  const weekDay = dayjs(selectedDate).format('dddd');

  const monthDay = dayjs(selectedDate).format(`DD[ de ]MMMM`);

  const dateOnly = dayjs(selectedDate).format('YYYY-MM-DD');

  const { data: availability } = useQuery<Availability>(
    ['availability', dateOnly, username],
    async () => {
      const response = await fetch(
        `/api/users/${username}/availability?date=${dateOnly}`,
      );

      const availability = await response.json();

      return availability;
    },
  );

  function handleSelectTime(hour: number) {
    const dateTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate();

    onSelectDateTime(dateTime);
  }

  return (
    <div className="absolute bottom-0 right-0 top-0 w-[280px] overflow-y-scroll border-l border-l-gray-600 px-6 pt-6 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-auto max-md:w-full max-md:border-l-0 max-md:border-t max-md:border-t-gray-600">
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
            onClick={() => handleSelectTime(hour)}
          >
            {String(hour).padStart(2, '0')}:00h
          </TimePickerItem>
        ))}
      </div>
    </div>
  );
}
