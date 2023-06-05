import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

import { Header } from '../components/_layout/Header';
import { UpdateProfileForm } from './components/UpdateProfileForm';

export default async function UpdateProfile() {
  const session = await getServerSession(authOptions);

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

        <MultiStep steps={4} currentStep={4} />
      </Header>

      <UpdateProfileForm
        avatarUrl={session?.user.avatar_url}
        username={session?.user.username}
      />
    </>
  );
}
