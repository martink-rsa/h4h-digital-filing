import styled from 'styled-components';

export type ButtonProps = {
  secondary?: boolean;
  width: string;
  iconPosition: string;
};

export const BaseButton = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  border: 0;

  width: ${(props) => props.width};

  font-size: 16px;
  font-weight: 600;

  color: #fff;

  background: ${({ secondary, theme }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  padding: 0.5rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius.main + 'px'};

  cursor: pointer;

  transition: background-color ${({ theme }) => theme.animation.short} ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: ${(props) =>
      props.iconPosition === 'left' ? '0 8px 0 0' : '0 0 0 8px'};
    height: 18px;
    width: 18px;
  }

  :hover {
    background: ${({ theme }) => theme.color.primaryLight};
  }
`;

export const Button = styled(BaseButton)``;

export const DisabledButton = styled(BaseButton)`
  background: #999;
  cursor: default;
  pointer-events: none;
`;

export const InvertButton = styled(BaseButton)`
  background: none;
  border: 3px solid
    ${(props) => (props.secondary ? props.theme.color.primary : '#fff')};
  color: ${(props) => (props.secondary ? props.theme.color.primary : '#fff')};
`;
