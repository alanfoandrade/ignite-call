'use client';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Check, ArrowRight } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Content } from '../../components/_layout/Content';

interface ConnectCalendarProps {
  hasAuthError: boolean;
  isSignedIn: boolean;
}

export function ConnectCalendarForm({
  hasAuthError,
  isSignedIn,
}: ConnectCalendarProps) {
  const router = useRouter();

  function handleConnectCalendar() {
    signIn('google', { callbackUrl: '/register/connect-calendar' });
  }

  function handleNavigateToNextStep() {
    router.push('/register/time-intervals');
  }

  return (
    <Content>
      <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-600 px-6 py-4">
        <Text>Google Calendar</Text>

        {isSignedIn && !hasAuthError ? (
          <Button disabled variant="secondary" size="sm">
            Conectado
            <Check className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="secondary" size="sm" onClick={handleConnectCalendar}>
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
  );
}
