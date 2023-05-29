import { Root, Indicator } from '@radix-ui/react-checkbox';
import { ComponentProps } from 'react';
import { Check } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export type CheckboxProps = ComponentProps<typeof Root>;

export function Checkbox({ onClick, className, ...props }: CheckboxProps) {
  return (
    <Root
      {...props}
      className={twMerge(
        'box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-gray-900 bg-gray-900 leading-[0] focus:border-green-300 data-[state=checked]:border-green-300 data-[state=checked]:bg-green-300',
        className,
      )}
    >
      <Indicator
        className={`h-4 w-4 text-white data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-slideOut`}
        asChild
      >
        <Check className="font-bold" />
      </Indicator>
    </Root>
  );
}
