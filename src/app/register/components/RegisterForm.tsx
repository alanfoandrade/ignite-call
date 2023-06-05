'use client';

import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { VStack } from '@/components/VStack';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Text } from '../../../components/Text';
import { Content } from './_layout/Content';

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

interface RegisterFormProps {
  username?: string;
}

export function RegisterForm({ username }: RegisterFormProps) {
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
    if (username) {
      setValue('username', username);
    }
  }, [username, setValue]);

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
    <Content as="form" onSubmit={handleSubmit(handleRegister)}>
      <VStack as="label">
        <Text className="text-sm">Nome de usuário</Text>

        <TextInput
          prefix="hiapp.com/"
          placeholder="seu-usuario"
          {...register('username')}
          error={errors.username}
        />
      </VStack>

      <VStack as="label">
        <Text className="text-sm">Nome completo</Text>

        <TextInput
          placeholder="Seu nome"
          {...register('name')}
          error={errors.name}
        />
      </VStack>

      <Button type="submit" disabled={!!isSubmitting}>
        Próximo passo <ArrowRight className="h-4 w-4" />
      </Button>
    </Content>
  );
}
