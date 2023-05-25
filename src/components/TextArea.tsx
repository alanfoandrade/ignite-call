import { TextareaHTMLAttributes } from 'react';

export function TextArea({
  children,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="font-regular
   box-border min-h-[5rem] resize-y rounded-md border-2 border-gray-900 bg-gray-900 px-4 py-3 text-sm text-white placeholder:border-gray-400 focus:border-green-300 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </textarea>
  );
}

TextArea.displayName = 'TextArea';
