import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import Container from 'components/Container/Container';
import UserOwnPopover from '../UserOwnPopover/UserOwnPopover';
import { HeaderStyles } from './HeaderStyled.styled';
import iconHome from '../../icons/Logo.png';
import avatar from '../../icons/outline.png';

const Header = () => {
  const token = useSelector(getToken);

  return (
    <HeaderStyles>
      <Container>
        <div className="containerHeader">
          <NavLink to={token ? '/main' : '/'} className="logoBox">
            <div>
              <img src={iconHome} alt="iconHome" />
            </div>
            <div className="logoText">Tracker of water</div>
          </NavLink>

          {token && (
            <div className="AuthContainer">
              <NavLink className="textSignIn" to="login">Sign in</NavLink>
              <div>
                <img src={avatar} alt="iconHome" />
              </div>
            </div>
          )}

          {!token && <UserOwnPopover />}
        </div>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
