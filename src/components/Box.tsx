import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Box({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        'border-1 rounded-lg border-gray-600 bg-gray-800 p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
