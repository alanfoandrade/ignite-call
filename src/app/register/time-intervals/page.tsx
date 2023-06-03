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
import { ArrowRight } from 'lucide-react';

export default function TimeIntervals() {
  return (
    <main className="mx-auto mb-4 mt-20 max-w-xl px-4">
      <div className="px-6">
        <Heading as="strong" className="leading-relaxed">
          Conecte sua agenda!
        </Heading>

        <Text className="mb-6 text-gray-200">
          Defina o intervalo de horários que você está disponiível em cada dia
          da semana.
        </Text>

        <MultiStep steps={4} currentStep={3} />
      </div>

      <Card as="form" className="mt-6 flex flex-col">
        <div className="mb-4 rounded-lg border border-gray-600 [&>*:nth-child(n+2)]:border-t [&>*:nth-child(n+2)]:border-t-gray-600">
          <Flex className="items-center justify-between px-4 py-3">
            <HStack className="gap-3">
              <Checkbox />

              <Text>Segunda-feira</Text>
            </HStack>

            <HStack className="gap-2">
              <TextInput variant="sm" type="time" step={60} />

              <TextInput variant="sm" type="time" step={60} />
            </HStack>
          </Flex>

          <Flex className="items-center justify-between px-4 py-3">
            <HStack className="gap-3">
              <Checkbox />

              <Text>Terça-feira</Text>
            </HStack>

            <HStack className="gap-2">
              <TextInput variant="sm" type="time" step={60} />

              <TextInput variant="sm" type="time" step={60} />
            </HStack>
          </Flex>
        </div>

        <Button type="submit">
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </main>
  );
}
