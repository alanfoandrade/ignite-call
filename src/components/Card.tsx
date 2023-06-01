import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Card({
  as: Component = 'div',
  children,
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={twMerge(
        'border-1 rounded-lg border-gray-600 bg-gray-800 p-6',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
