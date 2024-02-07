import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { PiSpinnerGap } from 'react-icons/pi';
import { getIsAuthLoading } from '../../redux/auth/authSelectors';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';

/* styles import */
import Styles from './Styles';
/* end */

import BubblesBottle from './Bottle/Bottle'

import { ReactComponent as EyeIconOn } from '../../icons/signIn-signUp/outlineOn.svg';
import { ReactComponent as EyeIconOff } from '../../icons/signIn-signUp/outlineOff.svg';
import { useState } from 'react';

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(getIsAuthLoading);

  // get current location
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/registration';

  const animaDynamic = [{ paddingLeft: '20px', }, { paddingLeft: '0', },
  { paddingLeft: '15px', }, { paddingLeft: '0', },
  { paddingLeft: '10px', }, { paddingLeft: '0', },
  { paddingLeft: '5px', }, { paddingLeft: '0', },];

  const [ passEyeToggle, setPassEyeToggle ] = useState(false);
  const [ passRepEyeToggle, setPassRepEyeToggle ] = useState(false);


  // The 'formik' check all validation expression.
  // But we have two variants form (logIn and register).
  // We must create own validate rules function, because
  // validation expression must be different for each situation.

  const validationLoginForm = {
    email: Yup.string()
      .matches(
        /\w{0}[0-9a-zA-Zа-яА-Я]+@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
        { message: 'Invalid email' }
      )
      .required('Email field is required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required('Password field is required'),
  };

  const validationRegisterForm = {
    ...validationLoginForm,
    repeatPassword: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required('RepeatPassword field is required')
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

    //! 'values' contains ended values all Form inputs.
    //! They will can get: 'values.<field name>' or change values on {email, password}
    onSubmit: ({ email, password }) => {
      isRegistrationPage
        ? dispatch(signUpAPI({ email, password }))
        : dispatch(signInAPI({ email, password }));
    },
  });

  const springs = useSpring({

    from: { paddingLeft: '0',},
    to: [...animaDynamic],
  
    config: {duration: 100,},

  });

  const navTo = (evt) => {

    evt.preventDefault();
    isRegistrationPage ? navigate('/login') : navigate('/registration');
  };

  const passEyeHandler = () => {
    setPassEyeToggle(value => !value)
  };

  const passRepEyeHandler = () => {
    setPassRepEyeToggle(value => !value)
  };

  return (
    <Styles $main>
      <Styles $div $contentBlock $align={'center'} $justify={'space-between'} width={'100%'} >
      
        <Styles $div $divDiraction={'column'} $pass  $marginRight={'100px'}>
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
                $inputColor={formik.touched.email && formik.errors.email ? '#EF5050' : '#407BFF'}
                $borderColor={formik.touched.email && formik.errors.email ? '#EF5050' : '#D7E3FF'}
                $borderRadius={'6px'}
                $marginBott={'16px'}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            
            <Styles $label htmlFor="password">
              <Styles $p $fontWeight={'400'}>
                Enter your password
              </Styles>
            </Styles>
           
            <Styles $div $pass  
              $backColor={'white'}
              $borderColor={formik.touched.password && formik.errors.password && !formik.errors.email ? '#EF5050' : '#D7E3FF'}
              $borderRadius={'6px'} $marginBott={isRegistrationPage ? '16px' : '8px'} $inputPadding={'12px 10px'}
              $border={'1px solid'}>
          
              <Styles
                $input
                $border={'none'}
                $marginBott={'0'}
                $inputPadding={'0'}
                height={'fit-content'}
                $inputColor={formik.touched.password && formik.errors.password && !formik.errors.email ? '#EF5050' : '#407BFF'}
                id="password"
                name="password"
                type={passEyeToggle ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password }
              />

              {formik.values.password !== '' ? passEyeToggle ? <EyeIconOn onClick={passEyeHandler}/> : <EyeIconOff onClick={passEyeHandler}/> : ''}

            </Styles>

            {isRegistrationPage && (
              <>
                <Styles $label htmlFor="repeatPassword">
                  <Styles $p $fontWeight={'400'}>
                    Repeat password
                  </Styles>
                </Styles>

                <Styles $div $pass 

                  $backColor={'white'}
                  $borderColor={formik.touched.repeatPassword && formik.errors.repeatPassword && !formik.errors.email ? '#EF5050' : '#D7E3FF'}
                  $borderRadius={'6px'} $marginBott={isRegistrationPage ? '8px' : '16px'} $inputPadding={'12px 10px'}
                  $border={'1px solid'}>

                <Styles
                  $input
                  $border={'none'}
                  $marginBott={'0'}
                  $inputPadding={'0'}
                  height={'fit-content'}
                  $inputColor={formik.touched.repeatPassword && formik.errors.repeatPassword && !formik.errors.password ? '#EF5050' : '#407BFF'}
                  id="repeatPassword"
                  name="repeatPassword"
                  type={passRepEyeToggle ? "text" : "password"}
                  onChange={formik.handleChange}
                  placeholder="Repeat password"
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                />
                {formik.values.repeatPassword !== '' ? passRepEyeToggle ? <EyeIconOn onClick={passRepEyeHandler}/> : <EyeIconOff onClick={passRepEyeHandler}/> : ''}
                </Styles>
              </>
            )} 
          
              <Styles $div color={'#EF5050'} height={'16px'} width={'100%'} $justify={'flex-start'} $marginBott={'8px'}>

                <animated.div style={{...springs,}}>
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : formik.touched.password && formik.errors.password && !formik.errors.email 
                    ? formik.errors.password
                    : formik.touched.repeatPassword && formik.errors.repeatPassword && !formik.errors.password
                    ? formik.errors.repeatPassword
                    : ''}
                </animated.div>
                
              </Styles>
          
            <Styles $button type="submit" $borderRadius={'10px'} $marginBott={'16px'}>
              {isLoading ? (
                  <PiSpinnerGap className="spinner" size={16} />
                ) : (
                  'Submit'
              )}
            </Styles>
          </Styles>

          <Styles $div $justify={'flex-start'} width={'100%'}>
            <Styles $link onClick={navTo}>To {isRegistrationPage ? 'Sign in' : 'Sign up'}</Styles>
          </Styles>
        </Styles>

        <BubblesBottle />

      </Styles>
    </Styles>
  );
};

export default AuthForm;