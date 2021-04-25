import React from 'react';
import * as S from './Button.style';

type Props = {
  onClick: () => any;
  iconPosition?: string;
  secondary?: boolean;
  disabled?: boolean;
  type?: any;
  icon?: string;
  width?: string;
  invert?: boolean;
  children: React.ReactNode;
};

/**
 * A button that defaults to the primary color
 * @param {boolean} secondary Uses the secondary color for the button
 * @param {boolean} disabled Disables the button
 * @example
 * <Button>Text</Button>
 */
function Button(props: Props) {
  const {
    secondary,
    disabled,
    icon,
    iconPosition = 'right',
    onClick,
    width = 'auto',
    invert = false,
    children,
    ...otherProps
  } = props;

  if (invert) {
    return (
      <S.InvertButton
        secondary={secondary}
        width={width}
        iconPosition={iconPosition}
        {...otherProps}
        onClick={onClick}
      >
        {iconPosition === 'left' ? (
          <>
            {icon && <img src={icon} alt="" />} {children}
          </>
        ) : (
          <>
            {children} {icon && <img src={icon} alt="" />}
          </>
        )}
      </S.InvertButton>
    );
  }

  if (disabled) {
    return (
      <S.DisabledButton
        disabled={disabled}
        width={width}
        iconPosition={iconPosition}
        {...otherProps}
      >
        {iconPosition === 'left' ? (
          <>
            {icon && <img src={icon} alt="" />} {children}
          </>
        ) : (
          <>
            {children} {icon && <img src={icon} alt="" />}
          </>
        )}
      </S.DisabledButton>
    );
  }
  return (
    <S.Button
      secondary={secondary}
      width={width}
      iconPosition={iconPosition}
      {...otherProps}
      onClick={onClick}
    >
      {iconPosition === 'left' ? (
        <>
          {icon && <img src={icon} alt="" />} {children}
        </>
      ) : (
        <>
          {children} {icon && <img src={icon} alt="" />}
        </>
      )}
    </S.Button>
  );
}

export default Button;
