'use client';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Flex } from '@/components/Flex';
import { Heading } from '@/components/Heading';
import { HStack } from '@/components/HStack';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { convertTimeStringToMinutes } from '@/utils/convert-time-string-to-minutes';
import { getWeekDays } from '@/utils/get-week-days';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Header } from '../components/Header';

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        enabled: z.boolean(),
        endTime: z.string(),
        startTime: z.string(),
        weekDay: z.number().int().min(0).max(6),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => !!intervals.length, {
      message: 'Você precisa selecionar pelo menos um dia da semana!',
    })
    .transform((intervals) =>
      intervals.map((interval) => ({
        endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
        weekDay: interval.weekDay,
      })),
    )
    .refine(
      (intervals) =>
        intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        ),
      {
        message:
          'O horário de término deve ser pelo menos 1h distante do início.',
      },
    ),
});

type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>;
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>;

export default function TimeIntervals() {
  const router = useRouter();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    watch,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<TimeIntervalsFormInput, any, TimeIntervalsFormOutput>({
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
    resolver: zodResolver(timeIntervalsFormSchema),
  });

  const weekDays = getWeekDays();

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  });

  const intervals = watch('intervals');

  async function handleSetTimeIntervals({
    intervals,
  }: TimeIntervalsFormOutput) {
    try {
      const response = await fetch('/api/users/time-intervals', {
        body: JSON.stringify({ intervals }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        const resp = await response.json();

        throw new Error(resp.message);
      }

      router.push('/register/update-profile');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  }

  return (
    <Container as="main">
      <Header>
        <Heading as="strong" className="leading-relaxed">
          Quase lá
        </Heading>

        <Text className="mb-6 text-gray-200">
          Defina o intervalo de horários que você está disponiível em cada dia
          da semana.
        </Text>

        <MultiStep steps={4} currentStep={3} />
      </Header>

      <Content as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <div className="mb-2 rounded-lg border border-gray-600 [&>*:nth-child(n+2)]:border-t [&>*:nth-child(n+2)]:border-t-gray-600">
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

        {!!errors?.intervals?.message && (
          <Text className="mb-4 text-sm text-error">
            {errors.intervals?.message}
          </Text>
        )}

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Content>
    </Container>
  );
}
