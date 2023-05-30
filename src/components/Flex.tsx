import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Flex({
  as: Component = 'div',
  children,
  className,
  ...props
}: FlexProps) {
  return (
    <Component {...props} className={twMerge('flex w-full', className)}>
      {children}
    </Component>
  );
}
