import { InputHTMLAttributes, forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  variant?: 'sm' | 'md';
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, variant = 'md', ...props }, ref) => {
    let container =
      'box-border flex items-center rounded-md border-2 border-gray-900 bg-gray-900 group-focus:border-green-300 group-disabled:cursor-not-allowed group-disabled:opacity-50';

    switch (variant) {
      case 'sm':
        container = container.concat(' px-3 py-2');
        break;

      case 'md':
        container = container.concat(' px-4 py-3');
        break;
    }

    return (
      <div className={container}>
        {!!prefix && <span className="text-sm text-gray-400">{prefix}</span>}

        <input
          {...props}
          className="group w-full border-0 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
          ref={ref}
        />
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
