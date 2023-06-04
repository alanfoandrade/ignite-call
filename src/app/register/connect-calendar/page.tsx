import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

import { Header } from '../components/_layout/Header';
import { ConnectCalendarForm } from './components/ConnectCalendarForm';

interface ConnectCalendarProps {
  searchParams: {
    error?: string;
  };
}

export default async function ConnectCalendar({
  searchParams,
}: ConnectCalendarProps) {
  const session = await getServerSession(authOptions);

  return (
    <>
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

      <ConnectCalendarForm
        hasAuthError={searchParams.error === 'permissions'}
        isSignedIn={!!session?.user.id}
      />
    </>
  );
}
