import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  variant?: 'sm' | 'md';
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { prefix, variant = 'md', className, error = null, ...props },
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

  return (
    <div>
      <div
        className={twMerge(
          `box-border flex items-center rounded-md border-2 border-gray-900 bg-gray-900 group-focus:border-green-300 group-disabled:cursor-not-allowed group-disabled:opacity-50`,
          variantStyles,
          className,
        )}
      >
        {!!prefix && <span className="text-sm text-gray-400">{prefix}</span>}

        <input
          {...props}
          className="group w-full border-0 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
          ref={ref}
        />
      </div>

      {!!error && (
        <div className="absolute mt-1 px-1">
          <Text className="text-sm text-gray-400">
            {error.message || 'Digite um nome de usuário'}
          </Text>
        </div>
      )}
    </div>
  );
};

export const TextInput = forwardRef(InputBase);
