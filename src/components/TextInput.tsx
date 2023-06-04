import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { Text } from './Text';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  prefix?: string;
  variant?: 'sm' | 'md';
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { className, disabled, error = null, prefix, variant = 'md', ...props },
  ref,
) => {
  let variantStyles = '';

  switch (variant) {
    case 'sm':
      variantStyles = 'px-3 py-2';

      break;

    case 'md':
      variantStyles = 'px-4 py-3';

      break;
  }

  const disabledStyles = disabled
    ? 'disabled cursor-not-allowed opacity-50'
    : '';

  return (
    <>
      <div
        className={twMerge(
          `group box-border flex items-center rounded-md border-2 border-gray-900 bg-gray-900 focus-within:border-green-300`,
          disabledStyles,
          variantStyles,
          className,
        )}
      >
        {!!prefix && <span className="text-sm text-gray-400">{prefix}</span>}

        <input
          className="group w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-0 focus:ring-0 group-[.disabled]:cursor-not-allowed [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:invert "
          ref={ref}
          disabled={disabled}
          {...props}
        />
      </div>

      {!!error?.message && (
        <div className="mt-1 px-1">
          <Text className="text-sm text-error">{error.message}</Text>
        </div>
      )}
    </>
  );
};

export const TextInput = forwardRef(InputBase);
