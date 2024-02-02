import AuthForm from '../components/AuthForm/AuthForm';
import Container from 'components/Container/Container';

/* styles import */
import Styles from './pageStyles/LogInStyle/Styles';
/* end */


const LoginPage = () => {
  return (

    <Styles $section>
      <Container>
        <AuthForm />
      </Container>
    </Styles>

  );
};

export default LoginPage;
