import { ButtonHTMLAttributes } from 'react';

export function CalendarActionButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="cursor-pointer rounded leading-none hover:text-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-gray-100"
    >
      {children}
    </button>
  );
}
