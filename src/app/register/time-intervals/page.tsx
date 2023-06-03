'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Checkbox } from '@/components/Checkbox';
import { Flex } from '@/components/Flex';
import { Heading } from '@/components/Heading';
import { HStack } from '@/components/HStack';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { getWeekDays } from '@/utils/get-week-days';
import { ArrowRight } from 'lucide-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

const timeIntervalsFormSchema = z.object({
  // TODO
});

export default function TimeIntervals() {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    watch,
  } = useForm({
    defaultValues: {
      intervals: [
        { enabled: false, endTime: '18:00', startTime: '08:00', weekDay: 0 },
        { enabled: true, endTime: '18:00', startTime: '08:00', weekDay: 1 },
        { enabled: true, endTime: '18:00', startTime: '08:00', weekDay: 2 },
        { enabled: true, endTime: '18:00', startTime: '08:00', weekDay: 3 },
        { enabled: true, endTime: '18:00', startTime: '08:00', weekDay: 4 },
        { enabled: true, endTime: '18:00', startTime: '08:00', weekDay: 5 },
        { enabled: false, endTime: '18:00', startTime: '08:00', weekDay: 6 },
      ],
    },
  });

  const weekDays = getWeekDays();

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  });

  const intervals = watch('intervals');

  async function handleSetTimeIntervals() {
    // TODO
  }

  return (
    <main className="mx-auto mb-4 mt-20 max-w-xl px-4">
      <div className="px-6">
        <Heading as="strong" className="leading-relaxed">
          Quase lá
        </Heading>

        <Text className="mb-6 text-gray-200">
          Defina o intervalo de horários que você está disponiível em cada dia
          da semana.
        </Text>

        <MultiStep steps={4} currentStep={3} />
      </div>

      <Card
        as="form"
        className="mt-6 flex flex-col"
        onSubmit={handleSubmit(handleSetTimeIntervals)}
      >
        <div className="mb-4 rounded-lg border border-gray-600 [&>*:nth-child(n+2)]:border-t [&>*:nth-child(n+2)]:border-t-gray-600">
          {fields.map((field, index) => (
            <Flex
              key={field.id}
              className="items-center justify-between px-4 py-3"
            >
              <HStack className="gap-3">
                <Controller
                  name={`intervals.${index}.enabled`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                      />
                    );
                  }}
                />

                <Text>{weekDays[field.weekDay]}</Text>
              </HStack>

              <HStack className="gap-2">
                <TextInput
                  variant="sm"
                  type="time"
                  step={60}
                  disabled={!intervals[index].enabled}
                  {...register(`intervals.${index}.startTime`)}
                />

                <TextInput
                  variant="sm"
                  type="time"
                  step={60}
                  disabled={!intervals[index].enabled}
                  {...register(`intervals.${index}.endTime`)}
                />
              </HStack>
            </Flex>
          ))}
        </div>

        <Button type="submit">
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </main>
  );
}
