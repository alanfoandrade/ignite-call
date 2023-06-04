import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Label({
  as: Component = 'label',
  children,
  className,
  ...props
}: LabelProps) {
  return (
    <Component className={twMerge('flex flex-col gap-2', className)} {...props}>
      {children}
    </Component>
  );
}
