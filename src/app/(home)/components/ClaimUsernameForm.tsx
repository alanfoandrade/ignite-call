'use client';

import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { ArrowRight } from 'lucide-react';
import { FormHTMLAttributes } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimusernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const handleClaimUsername: SubmitHandler<ClaimusernameFormData> = async (
    data,
  ) => {
    console.log(data);
  };

  return (
    <>
      <form
        {...props}
        className={twMerge(
          'border-1 mt-4 grid grid-cols-[1fr_auto] gap-2 rounded-lg border-gray-600 bg-gray-800 p-4 max-lg:grid-cols-1',
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

        <Button size="sm" type="submit">
          Reservar usuário
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="absolute mt-1 px-1">
        <p className="text-sm text-gray-400">
          {errors.username?.message || 'Digite um nome de usuário'}
        </p>
      </div>
    </>
  );
}
