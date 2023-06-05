import { getWeekDays } from '@/utils/get-week-days';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Text } from './../Text';
import { CalendarActionButton } from './components/CalendarActionButton';
import { CalendarDay } from './components/CalendarDay';

export function Calendar() {
  const shortWeekdays = getWeekDays({ short: true });

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <Text className="font-medium">
          Junho{' '}
          <Text as="span" className="text-gray-200">
            2023
          </Text>
        </Text>

        <div className="flex gap-2 text-gray-200">
          <CalendarActionButton>
            <ChevronLeft />
          </CalendarActionButton>

          <CalendarActionButton>
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
          <tr>
            <CalendarDay>1</CalendarDay>

            <CalendarDay disabled>2</CalendarDay>

            <CalendarDay>3</CalendarDay>

            <CalendarDay>4</CalendarDay>

            <CalendarDay>5</CalendarDay>

            <CalendarDay>6</CalendarDay>

            <CalendarDay>7</CalendarDay>
          </tr>
          <tr>
            <CalendarDay>8</CalendarDay>

            <CalendarDay disabled>9</CalendarDay>

            <CalendarDay>10</CalendarDay>

            <CalendarDay>11</CalendarDay>

            <CalendarDay>12</CalendarDay>

            <CalendarDay>13</CalendarDay>

            <CalendarDay>14</CalendarDay>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
