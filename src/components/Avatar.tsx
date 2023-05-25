import { Root, Image, Fallback } from '@radix-ui/react-avatar';

import { User } from 'phosphor-react';
import { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof Image> {
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Avatar({ alt, size = 'md', ...props }: AvatarProps) {
  let container = 'inline-block overflow-hidden rounded-full';

  switch (size) {
    case 'sm':
      container = container.concat(' w-12 h-12');

      break;

    case 'md':
      container = container.concat(' w-16 h-16');

      break;

    case 'lg':
      container = container.concat(' w-20 h-20');

      break;

    case 'xl':
      container = container.concat(' w-40 h-40');

      break;

    case '2xl':
      container = container.concat(' w-64 h-64');

      break;
  }

  return (
    <Root className={container}>
      <Image
        {...props}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
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

Avatar.displayName = 'Avatar';
