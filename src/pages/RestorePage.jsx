import axios from 'axios';
import { useFormik } from 'formik';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import {
  RestoreStyled,
  ContentStyles,
  BackgroundStyles,
} from './pageStyles/RestoreStyled/RestoreStyle';
import { getIsDarkTheme } from '../redux/theme/themeSelectors';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email('Enter valid email. For example user@gmail.com'),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .oneOf([yup.ref('repeatNewPassword')], 'Passwords do not match'),
  repeatNewPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
});

// =================================================================
function createCircle() {
  const section = document.querySelector('.bubble-gen');
  const circleEl = document.createElement('span');
  let size = Math.random() * 50;
  circleEl.style.width = 20 + size + 'px';
  circleEl.style.height = 20 + size + 'px';
  circleEl.style.left = Math.random() * window.innerWidth + 'px';
  section.appendChild(circleEl);

  setTimeout(() => {
    circleEl.remove();
  }, Math.random() * 5000);
}
setInterval(createCircle, 200);
// =================================================================

const RestorePage = () => {
  const nav = useNavigate();
  const isDark = useSelector(getIsDarkTheme);

  const { restoreToken } = useParams();
  const handleSubmit = async (
    { email, newPassword, repeatNewPassword },
    { resetForm }
  ) => {
    if (!restoreToken) {
      await axios.post(
        `https://dreamteam-water-server.onrender.com/api/users/restore`,
        { email }
      );
    } else {
      await axios.patch(
        `https://dreamteam-water-server.onrender.com/api/users/restore/${restoreToken}`,
        { password: newPassword }
      );
    }

    resetForm();
    nav('/');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <RestoreStyled $isDark={isDark}>
      <BackgroundStyles>
        <div className="box">
          <div></div>
          <form onSubmit={formik.handleSubmit} className="setting-form-form">
            {!restoreToken && (
              <div className="setting-text">
                Enter your email to change password:
              </div>
            )}
            {restoreToken && (
              <div className="setting-text">
                Enter your new password to change it:
              </div>
            )}
            {!restoreToken && (
              <label className="setting-form-name-label">
                <input
                  className="setting-form-input"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                />
              </label>
            )}
            {restoreToken && (
              <>
                <label className="setting-form-name-label">
                  <input
                    style={
                      formik.touched.newPassword &&
                      formik.errors.newPassword && {
                        borderColor: '#EF5050',
                      }
                    }
                    className="setting-form-input"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="newPassword"
                    placeholder="Password"
                  />
                </label>
                <label className="setting-form-name-label">
                  <input
                    style={
                      formik.touched.repeatNewPassword &&
                      formik.errors.repeatNewPassword && {
                        borderColor: '#EF5050',
                      }
                    }
                    className="setting-form-input"
                    type="text"
                    onChange={formik.handleChange}
                    name="repeatNewPassword"
                    placeholder="Repeat password"
                  />
                </label>
              </>
            )}
            <button type="submit" className="setting-form-submit">
              {!restoreToken && 'Send email'}
              {restoreToken && 'Change password'}
            </button>
          </form>{' '}
          <div className="bubble-gen"></div>
        </div>
      </BackgroundStyles>
    </RestoreStyled>
  );
};

export default RestorePage;
