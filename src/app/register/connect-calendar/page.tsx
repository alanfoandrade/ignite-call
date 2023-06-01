'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { ArrowRight } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';

export default function ConnectCalendar() {
  const { data } = useSession();

  return (
    <main className="mx-auto mb-4 mt-20 max-w-xl px-4">
      <div className="px-6">
        <Heading as="strong" className="leading-relaxed">
          Conecte sua agenda!
        </Heading>

        <Text className="mb-6 text-gray-200">
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep steps={4} currentStep={2} />
      </div>

      <Card className="mt-6 flex flex-col">
        <div className="mb-2 flex items-center justify-between rounded-lg border border-gray-600 px-6 py-4">
          {!data?.user ? (
            <>
              <Text>Google Calendar</Text>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => signIn('google')}
              >
                Conectar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Text>Bem vindo {data.user.name}</Text>
          )}
        </div>

        <Button type="submit">
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </main>
  );
}
