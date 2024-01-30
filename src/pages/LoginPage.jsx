import AuthForm from '../components/AuthForm/AuthForm';
import Container from 'components/Container/Container';

/* styles import */
import Styles from '../components/AuthForm/Styles';
/* end */


const LoginPage = () => {
  return (
    <Styles $section $back>
      <Container>
        <AuthForm />
      </Container>
    </Styles>
  );
};

export default LoginPage;
