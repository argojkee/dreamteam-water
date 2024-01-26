import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';

const AuthForm = () => {

  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  // get current location
  const location = useLocation();

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required("'Email' field is required"),
      password: Yup.string().min(8, 'Must be 8 characters or more').required("'Password' field is required"),
    //   repeatPassword: Yup.string().min(8, 'Must be 8 characters or more').required("'RepeatPassword' field is required"),
    }),

    onSubmit: values => {
    //   event.preventDefault();
      console.log(values)
      location.pathname === '/login' ?
      dispatch(signUpAPI({email: values.email, password: values.password,}))
      :
      dispatch(signInAPI({email: values.email, password: values.password,}));
    },

  });
  

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            {location.pathname === '/register' ? 
            <>
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
            
                <label htmlFor="repeatPassword">Repeat password</label>
                <input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repeatPassword}
                /> 

                
            </>:
            <>
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
            </>
            }
           
            <div style={{color: 'orange',}}>
                {formik.touched.email && formik.errors.email ? formik.errors.email 
                : formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            </div>

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default AuthForm