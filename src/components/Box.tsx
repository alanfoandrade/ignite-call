import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Box({
  as: Component = 'div',
  children,
  className,
  ...props
}: BoxProps) {
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
