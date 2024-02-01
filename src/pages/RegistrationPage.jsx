import AuthForm from '../components/AuthForm/AuthForm'
import Container from 'components/Container/Container';

/* styles import */
import Styles from './pageStyles/RegistrationStyle/Styles';
/* end */


const RegistrationPage = () => {

  return (
    
    <Styles $section $back>
      <Container>
        <AuthForm/>
      </Container>
    </Styles>

  );
};

export default RegistrationPage;