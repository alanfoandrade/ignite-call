import { Text } from '@/components/Text';

import { TimePickerItem } from './components/TimePickerItem';

export function TimePicker() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[280px] overflow-y-scroll border-l border-l-gray-600 px-6 pt-6">
      <Text className="font-medium">
        Terça-feira{' '}
        <Text as="span" className="text-gray-200">
          5 de junho
        </Text>
      </Text>

      <div className="mt-3 grid grid-cols-1 gap-2 max-md:grid-cols-2">
        <TimePickerItem>02:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>02:00h</TimePickerItem>
        <TimePickerItem>03:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>02:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>02:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>04:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>04:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>02:00h</TimePickerItem>
        <TimePickerItem>04:00h</TimePickerItem>
        <TimePickerItem>03:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>03:00h</TimePickerItem>
        <TimePickerItem>04:00h</TimePickerItem>
        <TimePickerItem>08:00h</TimePickerItem>
        <TimePickerItem>06:00h</TimePickerItem>
        <TimePickerItem>07:00h</TimePickerItem>
        <TimePickerItem>09:00h</TimePickerItem>
        <TimePickerItem>18:00h</TimePickerItem>
        <TimePickerItem>11:00h</TimePickerItem>
      </div>
    </div>
  );
}
