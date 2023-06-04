import { Card } from '@/components/Card';
import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContentProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Content({ as, children, className, ...props }: ContentProps) {
  return (
    <Card
      as={as}
      className={twMerge('mt-6 flex flex-col gap-4', className)}
      {...props}
    >
      {children}
    </Card>
  );
}
