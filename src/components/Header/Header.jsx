import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import Container from 'components/Container/Container';
import TestPopover from '../TestPopover/TestPopover';
import { HeaderStyles } from './HeaderStyled.styled';
import iconHome from '../../icons/Logo.png';
import avatar from '../../icons/outline.png';

const Header = () => {
  const token = useSelector(getToken);
  return (
    <Container>
      <HeaderStyles>
        {token && (
          <div className="containerHeader">
            <NavLink to="/" className="logoBox">
              <div>
                <img src={iconHome} alt="iconHome" />
              </div>
              <div className="logoText">Tracker of water</div>
            </NavLink>

            <div className="AuthContainer">
              <NavLink to="registration">Sign in</NavLink>
              <NavLink to="login">
                <div>
                  <img src={avatar} alt="iconHome" />
                </div>
              </NavLink>
            </div>
          </div>
        )}
        {!token && (
          <div className="containerHeader">
            <NavLink to="/" className="logoBox">
              <div>
                <img src={iconHome} alt="iconHome" />
              </div>
              <div className="logoText">Tracker of water</div>
            </NavLink>

            <div className="avatarContainer">
              <div className="avatarText">
                <span>nameUser</span>
              </div>
              <div>
                <img src={avatar} alt="iconHome" />
              </div>
              <TestPopover />
            </div>
          </div>
        )}
      </HeaderStyles>
    </Container>
  );
};

export default Header;
