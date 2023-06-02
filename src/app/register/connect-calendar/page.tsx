'use client';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { ArrowRight, Check } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';

interface ConnectCalendarProps {
  searchParams: {
    error?: string;
  };
}

export default function ConnectCalendar({
  searchParams,
}: ConnectCalendarProps) {
  const { status } = useSession();

  const hasAuthError = searchParams.error === 'permissions';

  const isSignedIn = status === 'authenticated';

  function handleConnectCalendar() {
    signIn('google', { callbackUrl: '/register/connect-calendar' });
  }

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
        <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-600 px-6 py-4">
          <Text>Google Calendar</Text>

          {isSignedIn && !hasAuthError ? (
            <Button disabled variant="secondary" size="sm">
              Conectado
              <Check className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {!!hasAuthError && (
          <Text className="mb-4 text-sm text-error">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </Text>
        )}

        <Button type="submit" disabled={!isSignedIn || hasAuthError}>
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </main>
  );
}
