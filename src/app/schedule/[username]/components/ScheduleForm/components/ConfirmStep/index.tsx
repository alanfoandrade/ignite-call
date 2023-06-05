'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { HStack } from '@/components/HStack';
import { Text } from '@/components/Text';
import { TextArea } from '@/components/TextArea';
import { TextInput } from '@/components/TextInput';
import { VStack } from '@/components/VStack';
import { Calendar, Clock } from 'lucide-react';

export function ConfirmStep() {
  function handleConfirmScheduling() {
    console.log('oi');
  }

  return (
    <Card
      as="form"
      className="mx-auto my-6 flex max-w-xl flex-col gap-4"
      onSubmit={handleConfirmScheduling}
    >
      <HStack className="mb-2 gap-4 border-b border-b-gray-600 pb-6">
        <HStack>
          <Calendar className="h-5 w-5 text-gray-200" />

          <Text>05 de junho de 2023</Text>
        </HStack>

        <HStack>
          <Clock className="h-5 w-5 text-gray-200" />

          <Text>10:00h</Text>
        </HStack>
      </HStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Nome completo</Text>

        <TextInput placeholder="Seu nome" />
      </VStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Endereço de e-mail</Text>

        <TextInput type="email" placeholder="johndoe@example.com" />
      </VStack>

      <VStack as="label" className="gap-2">
        <Text className="text-sm">Observações</Text>

        <TextArea />
      </VStack>

      <Text className="text-sm text-error">err</Text>

      <HStack className="mt-2 justify-end">
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button type="submit">Confirmar</Button>
      </HStack>
    </Card>
  );
}
