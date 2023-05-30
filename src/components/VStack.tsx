import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface VStackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function VStack({
  as: Component = 'div',
  children,
  className,
  ...props
}: VStackProps) {
  return (
    <Component
      {...props}
      className={twMerge('flex flex-col items-start gap-2', className)}
    >
      {children}
    </Component>
  );
}
