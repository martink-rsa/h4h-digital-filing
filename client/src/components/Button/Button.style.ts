import styled from 'styled-components';

export type ButtonProps = {
  secondary?: boolean;
  width: string;
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
    margin-left: 8px;
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
