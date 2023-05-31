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
    <Component className={twMerge('flex flex-col gap-2', className)} {...props}>
      {children}
    </Component>
  );
}
