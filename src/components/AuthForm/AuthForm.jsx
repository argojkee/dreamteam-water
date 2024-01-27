import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useFormik } from "formik";
import * as Yup from 'yup';

import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';

const AuthForm = () => {

  const dispatch = useDispatch();

  // get current location
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/registration';
  
  // The 'formik' check all validation expression. 
  // But we have two variants form (logIn and register).
  // We must create own validate rules function, because 
  // validation expression must be different for each situation.
  const validationSchemaBody = () => {
    if(!isRegistrationPage) {
      return {
        email: Yup.string().matches(
          /\w{0}[a-zA-Zа-яА-Я]+\@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
          { message: 'Invalid email'}
        ).required("'Email' field is required"),
        password: Yup.string().min(8, 'Must be 8 characters or more').required("'Password' field is required"),
      }
    }else {
      return {
        email: Yup.string().matches(
          /\w{0}[a-zA-Zа-яА-Я]+\@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
          { message: 'Invalid email' }
        ).required("'Email' field is required"),
        password: Yup.string().min(8, 'Must be 8 characters or more').required("'Password' field is required"),
        repeatPassword: Yup.string().min(8, 'Must be 8 characters or more').required("'RepeatPassword' field is required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'), 
      }
    };
  };

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },

    //yup stored own validate functions (for email, password...etc)
    validationSchema: Yup.object(validationSchemaBody()),
    
    //!'values' contains ended values all Form inputs. They will can get: 'values.<field name>' 
    onSubmit: values => {
      
      isRegistrationPage ?
      dispatch(signUpAPI({email: values.email, password: values.password,}))
      : 
      dispatch(signInAPI({email: values.email, password: values.password,}));

    },

  });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Enter your email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
            />

            <label htmlFor="password">Enter your password</label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
            />

            {isRegistrationPage  && 
               <>
                  <label htmlFor="repeatPassword">Repeat password</label>
                  <input
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.repeatPassword}>
                    
                  </input>
                </>
            }
          
            <div style={{color: 'orange',}}>
                {formik.touched.email && formik.errors.email ? formik.errors.email 
                : formik.touched.password && formik.errors.password ? formik.errors.password
                : formik.touched.repeatPassword && formik.errors.repeatPassword ? formik.errors.repeatPassword : ''}
            </div>

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default AuthForm