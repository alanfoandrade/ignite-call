'use client';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { TextArea } from '@/components/TextArea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Content } from '../../components/_layout/Content';
import { Label } from '../../components/_layout/Label';

const updateProfileFormSchema = z.object({
  bio: z.string(),
});

type UpdateProfileFormData = z.infer<typeof updateProfileFormSchema>;

export function UpdateProfileForm() {
  const router = useRouter();

  const session = useSession();

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  });

  async function handleUpdateProfile({ bio }: UpdateProfileFormData) {
    try {
      const response = await fetch('/api/users/profile', {
        body: JSON.stringify({ bio }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      });

      if (!response.ok) {
        const resp = await response.json();

        throw new Error(resp.message);
      }

      router.push(`/schedule/${session.data?.user.username}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  }

  return (
    <Content as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
      <Label>
        <Text className="text-sm">Foto de perfil</Text>

        <Avatar
          src={session.data?.user.avatar_url}
          alt={session.data?.user.name || ''}
        />
      </Label>

      <Label>
        <Text className="text-sm">Sobre você</Text>

        <TextArea {...register('bio')} />

        <Text className="text-sm text-gray-200">
          Fale um pouco sobre você. Isto será exibido em sua página pessoal.
        </Text>
      </Label>

      <Button type="submit" disabled={!!isSubmitting}>
        Finalizar
      </Button>
    </Content>
  );
}