import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  margin: 0;
  padding: 0;

  text-align: left;

  padding: 15px 20px;
  color: ${(props) => props.theme.color.primary};
  font-size: 25px;
  background: #fff;
  width: 100%;

  margin-bottom: 2px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: 500 !important;
  font-size: 25px;
`;

export const ControlsContainer = styled.div`
  display: flex;
`;

type ArrowIconProps = {
  isActive: boolean;
};

export const ArrowIcon = styled.img<ArrowIconProps>`
  transform: rotate(${(props) => (props.isActive ? '0deg' : '180deg')});
  transition: transform ${(props) => props.theme.animation.medium} ease-out;
  margin-left: 10px;
`;

export const Content = styled.div``;
