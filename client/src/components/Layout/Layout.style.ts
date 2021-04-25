import styled from 'styled-components';
import PulseLine from '../../assets/images/pulse-line.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Main = styled.main`
  flex-grow: 1;
  z-index: 2;
`;

export const PulseLineDecalContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 304px;
  width: 100%;
  background: red;
  background: url('${PulseLine}');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center;
`;
