import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--background-secondary);
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--green)
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
`;