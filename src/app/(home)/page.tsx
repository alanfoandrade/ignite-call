import Image from 'next/image';

import previewImg from '../../assets/app-preview.png';
import { ClaimUsernameForm } from './components/ClaimUsernameForm';

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center">
      <div className="ml-auto flex max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))] items-center gap-24 max-lg:ml-0">
        <section className="max-w-lg px-10">
          <h2 className="text-7xl font-bold max-lg:text-6xl">
            Agendamento descomplicado
          </h2>

          <p className="mt-2 text-xl text-gray-200">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </p>

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
      </div>
    </main>
  );
}
