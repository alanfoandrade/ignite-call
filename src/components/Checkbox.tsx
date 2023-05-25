'use client';

import { Check } from 'phosphor-react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { ComponentProps, useState } from 'react';

export type CheckboxProps = ComponentProps<typeof Root>;

export function Checkbox({ onClick, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleOnClick = (e: any) => {
    setChecked((prevState) => !prevState);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Root
      className={`${
        checked ? 'checked border-green-300 bg-green-300' : 'unchecked'
      } group box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-gray-900 bg-gray-900 leading-[0] focus:border-green-300`}
      onClick={handleOnClick}
      {...props}
    >
      <Indicator
        className={`h-4 w-4 text-white group-[.checked]:animate-slideIn group-[.unchecked]:animate-slideOut`}
        asChild
      >
        <Check weight="bold" />
      </Indicator>
    </Root>
  );
}
