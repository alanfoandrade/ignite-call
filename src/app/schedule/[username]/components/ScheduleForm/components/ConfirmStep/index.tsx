'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { HStack } from '@/components/HStack';
import { Text } from '@/components/Text';
import { TextArea } from '@/components/TextArea';
import { TextInput } from '@/components/TextInput';
import { VStack } from '@/components/VStack';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { Calendar, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const confirmFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  name: z.string().min(3, { message: 'O nome precisa no mínimo 3 caracteres' }),
  observations: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

interface ConfirmStepProps {
  onClearSelectedDate: () => void;
  schedulingDate: Date;
}

export function ConfirmStep({
  onClearSelectedDate,
  schedulingDate,
}: ConfirmStepProps) {
  const { username } = useParams();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  async function handleConfirmScheduling({
    email,
    name,
    observations,
  }: ConfirmFormData) {
    await fetch(`/api/users/${username}/schedule`, {
      body: JSON.stringify({ date: schedulingDate, email, name, observations }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    onClearSelectedDate();
  }

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY');
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]');

  return (
    <Card
      as="form"
      className="mx-auto my-6 flex max-w-xl flex-col gap-4"
      onSubmit={handleSubmit(handleConfirmScheduling)}
    >
      <HStack className="mb-2 gap-4 border-b border-b-gray-600 pb-6">
        <HStack>
          <Calendar className="h-5 w-5 text-gray-200" />

          <Text>{describedDate}</Text>
        </HStack>

        <HStack>
          <Clock className="h-5 w-5 text-gray-200" />

          <Text>{describedTime}</Text>
        </HStack>
      </HStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Nome completo</Text>

        <TextInput
          placeholder="Seu nome"
          {...register('name')}
          error={errors.name}
        />
      </VStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Endereço de e-mail</Text>

        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
          error={errors.email}
        />
      </VStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Observações</Text>

        <TextArea {...register('observations')} />
      </VStack>

      <HStack className="mt-2 justify-end">
        <Button type="button" variant="tertiary" onClick={onClearSelectedDate}>
          Cancelar
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </HStack>
    </Card>
  );
}
