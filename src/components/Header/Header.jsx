import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import Container from 'components/Container/Container';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { HeaderStyles } from './HeaderStyled.styled';
import iconHome from '../../icons/Logo.svg';
import avatarsvg from '../../icons/user_outline.svg';
import ToggleThemeBtn from 'components/ToggleThemeBtn/ToggleThemeBtn';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';

const Header = () => {
  const token = useSelector(getToken);
  const isDark = useSelector(getIsDarkTheme);
  
  return (
    <HeaderStyles $isDark={isDark}>
      <Container>
        <div className="containerHeader">
          <NavLink to={token ? '/main' : '/'} className="logoBox">
            <div>
              <img src={iconHome} alt="iconHome" />
            </div>
            <div className="logoText">TRACKER of water</div>
          </NavLink>
          <ToggleThemeBtn />
          {!token && (
            <div className="AuthContainer">
              <NavLink className="textSignIn" to="login">
                Sign in
              </NavLink>
              <div>
                <img src={avatarsvg} alt="iconHome" />
              </div>
            </div>
          )}

          {token && <UserLogoModal />}
        </div>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
