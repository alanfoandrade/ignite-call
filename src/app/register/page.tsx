import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { MultiStep } from '@/components/MultiStep';
import { TextInput } from '@/components/TextInput';
import { ArrowRight } from 'lucide-react';

export default function Register() {
  return (
    <main className="mx-auto mb-4 mt-20 max-w-xl px-4">
      <div className="px-6">
        <strong className="leading-relaxed">Bem-vindo ao Ignite Call!</strong>

        <p className="mb-6 leading-relaxed text-gray-200">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </p>

        <MultiStep steps={4} currentStep={1} />
      </div>

      <Box as="form" className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <p className="text-sm">Nome de usuário</p>

          <TextInput prefix="hiapp.com/" placeholder="seu-usuario" />
        </label>

        <label className="flex flex-col gap-2">
          <p className="text-sm">Nome completo</p>

          <TextInput placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Box>
    </main>
  );
}
