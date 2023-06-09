import { ButtonHTMLAttributes } from 'react';

export function CalendarDay({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <td className="box-border p-0.5">
      <button
        {...props}
        className="aspect-square w-full cursor-pointer rounded bg-gray-600 text-center focus:shadow-[0_0_0_2px] focus:shadow-gray-100 enabled:hover:bg-gray-500 disabled:cursor-default disabled:bg-transparent disabled:opacity-40"
      >
        {children}
      </button>
    </td>
  );
}
