import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContactsLinkContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;

  &.active {
    color: yellow;
  }
`;
