import {
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ children, className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        'font-regular box-border min-h-[5rem] resize-y rounded-md border-2 border-gray-900 bg-gray-900 px-4 py-3 text-sm text-white placeholder:border-gray-400 focus:border-green-300 focus:outline-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </textarea>
  );
};

export const TextArea = forwardRef(TextAreaBase);
