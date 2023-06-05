import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps) {
  let sizeStyles = '';
  let variantStyles = '';

  switch (size) {
    case 'sm':
      sizeStyles = 'h-10';

      break;

    case 'md':
      sizeStyles = 'h-12';

      break;
  }

  switch (variant) {
    case 'primary':
      variantStyles =
        'text-white bg-green-500 enabled:hover:bg-green-300 disabled:bg-gray-200';

      break;

    case 'secondary':
      variantStyles =
        'text-green-300 border-2 border-green-500 enabled:hover:bg-green-500 enabled:hover:text-white disabled:text-gray-200 disabled:border-gray-200';

      break;

    case 'tertiary':
      variantStyles =
        'text-gray-100 enabled:hover:text-white disabled:text-gray-400 disabled:border-gray-400';

      break;
  }

  return (
    <button
      className={twMerge(
        `box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-0 text-center text-sm font-normal duration-200 ease-in-out focus:shadow-[0_0_0_2px] focus:shadow-gray-100 disabled:cursor-not-allowed`,
        sizeStyles,
        variantStyles,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
