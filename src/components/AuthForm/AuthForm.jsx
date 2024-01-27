import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';

/* styles import */
import Styles from './Styles';
/* end */

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get current location
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/registration';

  // The 'formik' check all validation expression.
  // But we have two variants form (logIn and register).
  // We must create own validate rules function, because
  // validation expression must be different for each situation.

  const validationLoginForm = {
    email: Yup.string()
      .matches(
        /\w{0}[a-zA-Zа-яА-Я]+@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
        { message: 'Invalid email' }
      )
      .required("'Email' field is required"),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required("'Password' field is required"),
  };

  const validationRegisterForm = {
    ...validationLoginForm,
    repeatPassword: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required("'RepeatPassword' field is required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  };

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },

    //yup stored own validate functions (for email, password...etc)
    validationSchema: Yup.object(
      isRegistrationPage ? validationRegisterForm : validationLoginForm
    ),

    //!'values' contains ended values all Form inputs. They will can get: 'values.<field name>'
    onSubmit: values => {
      isRegistrationPage
        ? dispatch(
            signUpAPI({
              email: values.email,
              password: values.password,
            })
          )
        : dispatch(
            signInAPI({ email: values.email, password: values.password })
          );
    },
    //* onSubmit: {email, password} => {
    //*   isRegistrationPage
    //*     ? dispatch(
    //*         signUpAPI({ email, password })
    //*       )
    //*     : dispatch(
    //*         signInAPI({ email, password })
    //*       );
    //* },
  });

  const navTo = () => {
    isRegistrationPage ? navigate('/login') : navigate('/registration');
  };

  return (
    <Styles $div $justify={'center'}>
      <Styles $div $divDiraction={'column'} height={'312px'} width={'384px'}>
        <Styles $p $fontSize={'26px'} $marginBott={'16px'}>
          {isRegistrationPage ? 'Sign up' : 'Sign in'}
        </Styles>

        <Styles onSubmit={formik.handleSubmit} $form $formDiraction={'column'}>
          <Styles $label htmlFor="email">
            <Styles $p $fontWeight={'400'}>
              Enter your email
            </Styles>
          </Styles>
          <Styles
            $input
            $borderRadius={'6px'}
            $marginBott={'16px'}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <Styles $label htmlFor="password">
            <Styles $p $fontWeight={'400'}>
              Enter your password
            </Styles>
          </Styles>
          <Styles
            $input
            $borderRadius={'6px'}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {isRegistrationPage && (
            <>
              <Styles $label htmlFor="repeatPassword">
                <Styles $p $fontWeight={'400'}>
                  Repeat password
                </Styles>
              </Styles>
              <Styles
                $input
                $borderRadius={'6px'}
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
              />
            </>
          )}

          <Styles $div color={'#EF5050'} height={'8px'}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : formik.touched.password && formik.errors.password
              ? formik.errors.password
              : formik.touched.repeatPassword && formik.errors.repeatPassword
              ? formik.errors.repeatPassword
              : ''}
          </Styles>

          <Styles $button type="submit" $borderRadius={'10px'}>
            Submit
          </Styles>
        </Styles>

        <Styles $link onClick={navTo}>
          {' '}
          To {isRegistrationPage ? 'login' : 'registration'} page{' '}
        </Styles>
      </Styles>
    </Styles>
  );
};

export default AuthForm;
