import {
  ElementType,
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

const TextBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextProps> = (
  { as: Component = 'p', children, className, ...props },
  ref,
) => {
  return (
    <Component
      ref={ref}
      className={twMerge(
        'font-sans text-base leading-relaxed text-gray-100',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Text = forwardRef(TextBase);
