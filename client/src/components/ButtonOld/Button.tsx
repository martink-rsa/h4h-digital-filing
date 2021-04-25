import React from 'react';
import * as S from './Button.style';

type Props = {
  onClick: () => any;
  secondary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

/**
 * A button that defaults to the primary color
 * @param {boolean} secondary Uses the secondary color for the button
 * @param {boolean} disabled Disables the button
 * @example
 * <Button>Text</Button>
 */
function Button({
  onClick,
  secondary = false,
  disabled = false,
  children,
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (disabled) {
    return <S.DisabledButton disabled={disabled}>{children}</S.DisabledButton>;
  }
  return (
    <S.Button secondary={secondary} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default Button;
