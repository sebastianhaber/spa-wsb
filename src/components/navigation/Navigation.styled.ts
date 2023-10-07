import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 4rem;
  border-bottom: 1px solid black;
`;
export const StyledLink = styled(Link)`
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
    background-color: var(--primary);
  }
`;
