import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { ArrowRight } from 'lucide-react';
import { FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ClaimUsernameFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function ClaimUsernameForm({
  className,
  ...props
}: ClaimUsernameFormProps) {
  return (
    <form
      {...props}
      className={twMerge(
        'border-1 mt-4 grid grid-cols-[1fr_auto] gap-2 rounded-lg border-gray-600 bg-gray-800 p-4 max-lg:grid-cols-1',
        className,
      )}
    >
      <TextInput prefix="hiapp.com/" variant="sm" placeholder="seu-usuario" />

      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
