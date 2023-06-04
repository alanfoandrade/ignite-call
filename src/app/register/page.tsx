'use client';

import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { MultiStep } from '@/components/MultiStep';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Container } from './components/Container';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Label } from './components/Label';

const registerFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Mínimo 3 letras' })
    .regex(/^([a-z ]+)$/i, {
      message: 'Apenas letras',
    }),
  username: z
    .string()
    .min(3, { message: 'Mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Apenas letras ou hifens',
    })
    .transform((value) => value.toLowerCase()),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

interface RegisterProps {
  searchParams: {
    name: string;
    username: string | string[];
  };
}

export default function Register({ searchParams }: RegisterProps) {
  const router = useRouter();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  useEffect(() => {
    if (searchParams.username) {
      setValue('username', String(searchParams.username));
    }
  }, [searchParams.username, setValue]);

  async function handleRegister(data: RegisterFormData) {
    try {
      const response = await fetch('/api/users', {
        body: JSON.stringify({
          name: data.name,
          username: data.username,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        const resp = await response.json();

        throw new Error(resp.message);
      }

      router.push('/register/connect-calendar');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.message) {
        alert(err.message);

        return;
      }

      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  return (
    <Container as="main">
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

      <Content as="form" onSubmit={handleSubmit(handleRegister)}>
        <Label>
          <Text className="text-sm">Nome de usuário</Text>

          <TextInput
            prefix="hiapp.com/"
            placeholder="seu-usuario"
            {...register('username')}
            error={errors.username}
          />
        </Label>

        <Label>
          <Text className="text-sm">Nome completo</Text>

          <TextInput
            placeholder="Seu nome"
            {...register('name')}
            error={errors.name}
          />
        </Label>

        <Button type="submit" disabled={!!isSubmitting}>
          Próximo passo <ArrowRight className="h-4 w-4" />
        </Button>
      </Content>
    </Container>
  );
}
