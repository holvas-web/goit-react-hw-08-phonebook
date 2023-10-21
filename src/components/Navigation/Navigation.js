import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ListNav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <ListNav>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
        </ListNav>
      )}
    </div>
  );
};
