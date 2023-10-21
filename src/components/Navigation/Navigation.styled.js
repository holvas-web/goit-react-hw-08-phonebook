import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  /* color: #394246; */
  font-weight: 700;

  &.active {
    color: tomato;
  }
`;
