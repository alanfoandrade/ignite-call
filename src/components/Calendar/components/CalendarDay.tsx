import { ButtonHTMLAttributes } from 'react';

export function CalendarDay({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <td className="box-border">
      <button
        {...props}
        className="aspect-square w-full cursor-pointer rounded bg-gray-600 text-center focus:shadow-[0_0_0_2px] focus:shadow-gray-100 hover:enabled:bg-gray-500 disabled:cursor-not-allowed disabled:bg-none disabled:opacity-40"
      >
        {children}
      </button>
    </td>
  );
}
