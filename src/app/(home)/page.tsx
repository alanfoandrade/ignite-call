import { Heading } from '@/components/Heading';
import { HStack } from '@/components/HStack';
import { Text } from '@/components/Text';
import Image from 'next/image';

import previewImg from '../../assets/app-preview.png';
import { ClaimUsernameForm } from './components/ClaimUsernameForm';

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center">
      <HStack className="ml-auto max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))] gap-24 max-lg:ml-0">
        <section className="max-w-lg px-10">
          <Heading as="h1" className="text-7xl max-lg:text-6xl">
            Agendamento descomplicado
          </Heading>

          <Text className="mt-2 text-lg text-gray-200 max-lg:text-base">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </section>

        <section className="overflow-hidden max-lg:hidden">
          <Image
            className="min-h-[400px] min-w-[800px]"
            src={previewImg}
            alt="Preview da aplicação em funcionamento"
            height={400}
            width={800}
            priority
          />
        </section>
      </HStack>
    </main>
  );
}
