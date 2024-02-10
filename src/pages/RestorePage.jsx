import axios from 'axios';
import { useFormik } from 'formik';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';

import { BackgroundContainer, ContentContainer } from './HomePage.styled';
import { VerificationStyles } from './pageStyles/VerificationStyle/Verification.styled';
import Container from 'components/Container/Container';
import { useParams } from 'react-router-dom';

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

const RestorePage = () => {
  const nav = useNavigate();
  const { restoreToken } = useParams();
  const handleSubmit = async (
    { email, newPassword, repeatNewPassword },
    { resetForm }
  ) => {
    if (!restoreToken) {
      await axios.post(
        `http://dreamteam-water-server.onrender.com/api/users/restore`,
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
    <>
      <BackgroundContainer>
        <Container>
          <ContentContainer>
            <VerificationStyles>
              <div className="box">
                <form onSubmit={formik.handleSubmit}>
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
                </form>
              </div>
            </VerificationStyles>
          </ContentContainer>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default RestorePage;
