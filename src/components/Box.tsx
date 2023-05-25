import { HTMLAttributes } from 'react';

export function Box({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="border-1 rounded-lg border-gray-600 bg-gray-800 p-6"
    >
      {children}
    </div>
  );
}
