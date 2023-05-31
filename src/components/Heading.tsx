import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Heading({
  as: Component = 'p',
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={twMerge(
        'font-sans text-2xl font-bold leading-tight text-gray-100',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
