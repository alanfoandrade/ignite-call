import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Text({
  as: Component = 'p',
  children,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      {...props}
      className={twMerge(
        'font-sans text-base leading-relaxed text-gray-100',
        className,
      )}
    >
      {children}
    </Component>
  );
}
