import React from 'react';
import * as S from './Input.style';

type Props = {
  name: string;
  id: string;
  label?: string;
};

/**
 * An input with default styling
 * @param label Generates a label and the text as its child
 * @example
 * <Input id="myId" name="myName" />
 * <Input id="myId" name="myName" label="Label text" />
 */
function Input({
  label,
  id,
  name,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) {
  if (label) {
    return (
      <>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input id={id} name={name} {...props} />
      </>
    );
  }
  return <S.Input id={id} name={name} {...props} />;
}

export default Input;
