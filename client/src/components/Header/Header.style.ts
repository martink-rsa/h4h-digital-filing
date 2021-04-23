import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.page + 'px'};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 0.313rem;
`;

export const NavMenu = styled.nav`
  display: flex;
  /* background: blueviolet; */
  outline: 1px solid lightgray;
  height: 40px;
  width: 40px;
`;
