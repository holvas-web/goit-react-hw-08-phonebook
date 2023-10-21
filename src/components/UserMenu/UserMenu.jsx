import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { Container, Logout } from './UserMenu.styled';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <Logout type="submit" onClick={() => dispatch(logoutUser())}>
        Logout
      </Logout>
    </Container>
  );
};
