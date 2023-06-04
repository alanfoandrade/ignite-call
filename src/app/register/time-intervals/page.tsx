import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';

import { Header } from '../components/_layout/Header';
import { TimeIntervalsForm } from './components/TimeIntervalsForm';

export default function TimeIntervals() {
  return (
    <>
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

      <TimeIntervalsForm />
    </>
  );
}
