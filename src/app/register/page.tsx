import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';

import { Header } from './components/_layout/Header';
import { RegisterForm } from './components/RegisterForm';

interface RegisterProps {
  searchParams: {
    name: string;
    username: string | string[];
  };
}

export default function Register({ searchParams }: RegisterProps) {
  return (
    <>
      <Header>
        <Heading as="strong" className="leading-relaxed">
          Bem-vindo ao Ignite Call!
        </Heading>

        <Text className="mb-6 text-gray-200">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep steps={4} currentStep={1} />
      </Header>

      <RegisterForm
        username={
          searchParams.username ? String(searchParams.username) : undefined
        }
      />
    </>
  );
}
