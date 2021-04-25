import styled from 'styled-components';

export type ButtonProps = {
  secondary?: boolean;
};

export const BaseButton = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  border: 0;

  font-size: 16px;

  color: #fff;

  background: ${({ secondary, theme }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  padding: 1rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.main + 'px'};

  cursor: pointer;

  transition: background-color ${({ theme }) => theme.animation.short} ease-out;

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
