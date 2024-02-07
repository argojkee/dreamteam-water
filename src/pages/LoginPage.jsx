import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm/AuthForm';
import Container from 'components/Container/Container';

/* styles import */
import Styles from './pageStyles/LInLOutStyle/Styles';
/* end */

const LoginPage = () => {

  const selector = useSelector(state => state.auth);

  return (

    <Styles $section $bottleSize={selector.bottleXY}>
      <Container>
        <AuthForm />
      </Container>
    </Styles>

  );
};

export default LoginPage;
