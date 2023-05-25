import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md';
}

export function Button({
  children,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps) {
  let className =
    'rounded-md text-sm font-normal text-center min-w-[120px] box-border py-0 px-4 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed focus:shadow-[0_0_0_2px_gray-100]';

  switch (size) {
    case 'sm':
      className = className.concat(' h-9');

      break;

    case 'md':
      className = className.concat(' h-11');

      break;
  }

  switch (variant) {
    case 'primary':
      className = className.concat(
        ' text-white bg-green-500 enabled:hover:bg-green-300 disabled:bg-gray-200',
      );

      break;

    case 'secondary':
      className = className.concat(
        ' text-green-300 border-2 border-green-500 enabled:hover:bg-green-500 enabled:hover:text-white disabled:text-gray-200 disabled:border-gray-200',
      );

      break;

    case 'tertiary':
      className = className.concat(
        ' text-gray-100 enabled:hover:text-white disabled:text-gray-400 disabled:border-gray-400',
      );

      break;
  }
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
