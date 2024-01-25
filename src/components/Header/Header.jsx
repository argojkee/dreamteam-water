import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const Header = () => {
  const token = useSelector(getToken);
  return (
    <header>
      {!token && (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="registration">Registration</NavLink>
          <NavLink to="login">Login</NavLink>
        </>
      )}
      {token && <LogoutBtn />}
    </header>
  );
};

export default Header;
