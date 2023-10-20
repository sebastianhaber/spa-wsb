import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../helpers/themes';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 4rem;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.colors.background + '80'};
  backdrop-filter: blur(20px) saturate(180%);
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 10px;
  padding: 0 1rem;
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
  &.active {
    background-color: ${theme.colors.secondary};
  }
`;
