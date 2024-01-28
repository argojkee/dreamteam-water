import { useFormik } from 'formik';
import { SettingModalStyled } from './SettingModalStyled.styled';
import { useState } from 'react';
import * as yup from 'yup';
import { BsUpload } from 'react-icons/bs';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

const iconColor = '#407BFF';

const schema = yup.object().shape({
  gender: yup.string().required(),
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters.'
    )
    .required(),
  email: yup
    .string()
    .email('Enter valid email. For example user@gmail.com')
    .required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .required(),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .oneOf([yup.ref('repeatNewPassword')], 'Passwords do not match'),
  repeatNewPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
});

export const SettingModal = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    closeModal();
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      gender: 'Woman',
      name: '',
      email: '',
      password: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <SettingModalStyled>
      <h2 className="setting-title">Setting</h2>
      <div>
        <p className="setting-text setting-modal-text">Your photo</p>
        <div className="setting-photo-wrapper">
          <img src="" alt="avatar" className="setting-avatar" />
          <label className="upload-photo-label">
            <BsUpload color={iconColor} />
            <p className="upload-photo-text">Upload a photo</p>
            <input
              type="file"
              name="upload_photo"
              className="photo-input"
              accept=".png, .jpg, .jpeg"
            />
          </label>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="setting-form">
        <div className="setting-form-wrapper">
          <div className="setting-form-content-wrapper">
            <div className="setting-form-gender-identity-wrapper">
              <p className="setting-text setting-form-text">
                Your gender identity
              </p>
              <div className="setting-form-gender-wrapper">
                <label className="setting-form-gender-label">
                  <input
                    className="setting-form-gender-button"
                    type="radio"
                    name="gender"
                    value="Woman"
                    onChange={formik.handleChange}
                    checked={formik.values.gender === 'Woman'}
                  />
                  <p className="setting-form-gender-text">Woman</p>
                </label>
                <label className="setting-form-gender-label">
                  <input
                    className="setting-form-gender-button"
                    type="radio"
                    name="gender"
                    value="Man"
                    onChange={formik.handleChange}
                    checked={formik.values.gender === 'Man'}
                  />
                  <p className="setting-form-gender-text">Man</p>
                </label>
              </div>
            </div>
            <label className="setting-form-name-label">
              <p className="setting-text setting-modal-text">Your name</p>
              <input
                style={
                  formik.touched.name &&
                  formik.errors.name && { borderColor: '#EF5050' }
                }
                className="setting-form-input"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                name="name"
                placeholder="Name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="setting-form-input-error">{formik.errors.name}</p>
              )}
            </label>
            <label>
              <p className="setting-text setting-modal-text">E-mail</p>
              <input
                style={
                  formik.touched.email &&
                  formik.errors.email && { borderColor: '#EF5050' }
                }
                className="setting-form-input"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
                placeholder="E-mail"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="setting-form-input-error">
                  {formik.errors.email}
                </p>
              )}
            </label>
          </div>
          <div className="setting-form-password-wrapper">
            <p className="setting-text">Password</p>
            <label>
              <p className="setting-modal-text setting-form-password-text">
                Outdated password
              </p>
              <span className="setting-form-input-wrapper">
                <input
                  style={
                    formik.touched.password &&
                    formik.errors.password && { borderColor: '#EF5050' }
                  }
                  className="setting-form-input"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {showPassword ? (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEye
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                ) : (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEyeOff
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                )}
                {formik.touched.password && formik.errors.password && (
                  <p className="setting-form-input-error">
                    {formik.errors.password}
                  </p>
                )}
              </span>
            </label>
            <label>
              <p className="setting-modal-text setting-form-password-text">
                New Password
              </p>
              <span className="setting-form-input-wrapper">
                <input
                  style={
                    formik.touched.newPassword &&
                    formik.errors.newPassword && { borderColor: '#EF5050' }
                  }
                  className="setting-form-input"
                  type={showNewPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                  onBlur={formik.handleBlur}
                  name="newPassword"
                  placeholder="Password"
                />
                {showNewPassword ? (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEye
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                ) : (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEyeOff
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                )}
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <p className="setting-form-input-error">
                    {formik.errors.newPassword}
                  </p>
                )}
              </span>
            </label>
            <label>
              <p className="setting-modal-text setting-form-password-text">
                Repeat new password
              </p>
              <span className="setting-form-input-wrapper">
                <input
                  style={
                    formik.touched.repeatNewPassword &&
                    formik.errors.repeatNewPassword && {
                      borderColor: '#EF5050',
                    }
                  }
                  className="setting-form-input"
                  type={showRepeatNewPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.repeatNewPassword}
                  onBlur={formik.handleBlur}
                  name="repeatNewPassword"
                  placeholder="Password"
                />
                {showRepeatNewPassword ? (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() =>
                      setShowRepeatNewPassword(!showRepeatNewPassword)
                    }
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEye
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                ) : (
                  <button
                    className="setting-form-password-button"
                    type="button"
                    onClick={() =>
                      setShowRepeatNewPassword(!showRepeatNewPassword)
                    }
                    onMouseDown={handleMouseDownPassword}
                  >
                    <FiEyeOff
                      color={iconColor}
                      className="setting-form-password-icon"
                    />
                  </button>
                )}
                {formik.touched.repeatNewPassword &&
                  formik.errors.repeatNewPassword && (
                    <p className="setting-form-input-error">
                      {formik.errors.repeatNewPassword}
                    </p>
                  )}
              </span>
            </label>
          </div>
        </div>
        <button type="submit" className="setting-form-submit">
          Save
        </button>
      </form>
    </SettingModalStyled>
  );
};
