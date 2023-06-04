'use client';

import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { ArrowRight, Check } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Header } from '../components/Header';

interface ConnectCalendarProps {
  searchParams: {
    error?: string;
  };
}

export default function ConnectCalendar({
  searchParams,
}: ConnectCalendarProps) {
  const router = useRouter();

  const { status } = useSession();

  const hasAuthError = searchParams.error === 'permissions';

  const isSignedIn = status === 'authenticated';

  function handleConnectCalendar() {
    signIn('google', { callbackUrl: '/register/connect-calendar' });
  }

  function handleNavigateToNextStep() {
    router.push('/register/time-intervals');
  }

  return (
    <Container as="main">
      <Header>
        <Heading as="strong" className="leading-relaxed">
          Conecte sua agenda!
        </Heading>

        <Text className="mb-6 text-gray-200">
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep steps={4} currentStep={2} />
      </Header>

      <Content>
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

        <Button
          type="button"
          onClick={handleNavigateToNextStep}
          disabled={!isSignedIn || hasAuthError}
        >
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Content>
    </Container>
  );
}
