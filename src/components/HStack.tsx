import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface HStackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function HStack({
  as: Component = 'div',
  children,
  className,
  ...props
}: HStackProps) {
  return (
    <Component
      {...props}
      className={twMerge('flex w-full items-center gap-2', className)}
    >
      {children}
    </Component>
  );
}
