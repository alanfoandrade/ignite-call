import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Container({
  as: Component = 'div',
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={twMerge('mx-auto mb-4 mt-20 max-w-xl px-4', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
