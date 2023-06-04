import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Header({
  as: Component = 'div',
  children,
  className,
  ...props
}: HeaderProps) {
  return (
    <Component className={twMerge('px-6', className)} {...props}>
      {children}
    </Component>
  );
}
