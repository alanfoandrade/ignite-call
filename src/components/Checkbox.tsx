'use client';

import { Check } from 'phosphor-react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { ComponentProps } from 'react';

export type CheckboxProps = ComponentProps<typeof Root>;

export function Checkbox({ onClick, ...props }: CheckboxProps) {
  return (
    <Root
      className="box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-gray-900 bg-gray-900 leading-[0] focus:border-green-300 data-[state=checked]:border-green-300 data-[state=checked]:bg-green-300"
      {...props}
    >
      <Indicator
        className={`h-4 w-4 text-white data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-slideOut`}
        asChild
      >
        <Check weight="bold" />
      </Indicator>
    </Root>
  );
}

Checkbox.displayName = 'Checkbox';
