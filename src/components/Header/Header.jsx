import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import Container from 'components/Container/Container';
import TestPopover from '../TestPopover/TestPopover';

const Header = () => {
  const token = useSelector(getToken);
  return (
    <header>
      <Container>
        {!token && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="registration">Registration</NavLink>
            <NavLink to="login">Login</NavLink>
          </>
        )}
        {token && (
          <>
            <LogoutBtn />
            <TestPopover />
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
