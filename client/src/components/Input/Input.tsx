import React, { FC, InputHTMLAttributes } from 'react';
import * as S from './Input.style';

enum Size {
  's' = 's',
  'm' = 'm',
  'l' = 'l',
}

interface InputProps {
  name: string;
  id: string;
  type?: string;
  label?: string;
  inputSize?: string;
  labelPadding?: string;
  onChange?: any;
  value?: any;
  pattern?: string;
}

/**
 * An input with default styling
 * @param label Generates a label and the text as its child
 * @example
 * <Input id="myId" name="myName" />
 * <Input id="myId" name="myName" label="Label text" />
 */
const Input: FC<InputProps> = ({
  id,
  name,
  label,
  inputSize = 'm',
  labelPadding = '0',
  onChange,
  value,
  pattern,
  ...rest
}) => {
  if (label) {
    return (
      <>
        <S.Label labelPadding={labelPadding} htmlFor={id}>
          {label}
        </S.Label>
        <S.Input
          id={id}
          name={name}
          onChange={onChange}
          inputSize={inputSize}
          value={value}
          pattern={pattern}
          {...rest}
        />
      </>
    );
  }
  return (
    <S.Input
      id={id}
      name={name}
      onChange={onChange}
      inputSize={inputSize}
      value={value}
      pattern={pattern}
      {...rest}
    />
  );
};

export default Input;

/* import React from 'react';
import * as S from './Input.style';

type Props = {
  name: string;
  id: string;
  size: 's' | 'l';
  label?: string;
};

function Input(props: Props) {
  const { label, id, name, size, ...otherProps } = props;
  if (label) {
    return (
      <>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input id={id} name={name} {...otherProps} />
      </>
    );
  }
  return <S.Input id={id} name={name} {...otherProps} />;
}

export default Input;
 */
