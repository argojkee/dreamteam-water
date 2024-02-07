import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm/AuthForm';
import Container from 'components/Container/Container';
import { getIsDarkTheme } from '../redux/theme/themeSelectors';
/* styles import */
import Styles from './pageStyles/LInLOutStyle/Styles';
/* end */

const LoginPage = () => {
  const selector = useSelector(state => state.auth);
  const isDark = useSelector(getIsDarkTheme);
  return (
    <Styles $isDark={isDark} $section $bottleSize={selector.bottleXY}>
      <Container>
        <AuthForm />
      </Container>
    </Styles>
  );
};

export default LoginPage;
