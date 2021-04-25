import React from 'react';
import * as S from './Button.style';

type Props = {
  onClick: () => any;
  secondary?: boolean;
  disabled?: boolean;
  icon?: string;
  width?: string;
  children: React.ReactNode;
};

/**
 * A button that defaults to the primary color
 * @param {boolean} secondary Uses the secondary color for the button
 * @param {boolean} disabled Disables the button
 * @example
 * <Button>Text</Button>
 */
function Button(props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {
    secondary,
    disabled,
    icon,
    onClick,
    width = 'auto',
    children,
    ...otherProps
  } = props;

  if (disabled) {
    return (
      <S.DisabledButton disabled={disabled} width={width} {...otherProps}>
        {children}
      </S.DisabledButton>
    );
  }
  return (
    <S.Button
      secondary={secondary}
      width={width}
      {...otherProps}
      onClick={onClick}
    >
      {children} {icon && <img src={icon} alt="" />}
    </S.Button>
  );
}

export default Button;
