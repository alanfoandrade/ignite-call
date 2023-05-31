import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AvatarProps extends ComponentProps<typeof Image> {
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Avatar({ alt, className, size = 'md', ...props }: AvatarProps) {
  let sizeStyles = '';

  switch (size) {
    case 'sm':
      sizeStyles = 'w-12 h-12';

      break;

    case 'md':
      sizeStyles = 'w-16 h-16';

      break;

    case 'lg':
      sizeStyles = 'w-20 h-20';

      break;

    case 'xl':
      sizeStyles = 'w-40 h-40';

      break;

    case '2xl':
      sizeStyles = 'w-64 h-64';

      break;
  }

  return (
    <Root
      className={twMerge(
        `inline-block overflow-hidden rounded-full`,
        sizeStyles,
        className,
      )}
    >
      <Image
        alt={alt}
        className="h-full w-full rounded-full object-cover"
        {...props}
      />

      <Fallback
        className="flex h-full w-full items-center justify-center bg-gray-400 text-gray-800"
        delayMs={600}
      >
        <User className="h-6 w-6" />
      </Fallback>
    </Root>
  );
}
