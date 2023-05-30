'use client';

import { Button } from '@/components/Button';
import { Text } from '../../../components/Text';
import { TextInput } from '@/components/TextInput';
import { ArrowRight } from 'lucide-react';
import { FormHTMLAttributes } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@/components/Box';
import { useRouter } from 'next/navigation';

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Apenas letras ou hifens',
    })
    .transform((value) => value.toLowerCase()),
});

type ClaimusernameFormData = z.infer<typeof claimUsernameFormSchema>;

interface ClaimUsernameFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function ClaimUsernameForm({
  className,
  ...props
}: ClaimUsernameFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimusernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const handleClaimUsername: SubmitHandler<ClaimusernameFormData> = (data) => {
    const { username } = data;

    router.push(`/register?username=${username}`);
  };

  return (
    <>
      <Box
        {...props}
        as="form"
        className={twMerge(
          'mt-4 grid grid-cols-[1fr_auto] gap-2 p-4 max-lg:grid-cols-1',
          className,
        )}
        onSubmit={handleSubmit(handleClaimUsername)}
      >
        <input className="hidden" />

        <TextInput
          prefix="hiapp.com/"
          variant="sm"
          placeholder="seu-usuario"
          {...register('username')}
        />

        <Button size="sm" type="submit" disabled={!!isSubmitting}>
          Reservar
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Box>

      <div className="mt-1 px-1">
        <Text
          className={`text-sm ${
            errors.username?.message ? 'text-[#f75a68]' : 'text-gray-400'
          }`}
        >
          {errors.username?.message || 'Digite um nome de usuário'}
        </Text>
      </div>
    </>
  );
}
