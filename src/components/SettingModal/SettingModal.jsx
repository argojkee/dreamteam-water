import { useFormik } from 'formik';
import { SettingModalStyled } from './SettingModalStyled.styled';
import { useState } from 'react';
import * as yup from 'yup';
import { BsUpload } from 'react-icons/bs';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

import { changeUserAvatarAPI } from 'API/Auth/changeUserAvatarAPI';
import { useDispatch } from 'react-redux';

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
    .when('repeatNewPassword', ([repeatNewPassword], schema) => {
      return repeatNewPassword !== ''
        ? schema.required()
        : schema.notRequired();
    }),
  repeatNewPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
});

export const SettingModal = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm();
    // closeModal();
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

  const onChangeAvatar = e => {
    dispatch(changeUserAvatarAPI(e.target.files[0]));
  };

  return (
    <SettingModalStyled>
      <h2>Setting</h2>
      <p>Your photo</p>
      <img src="" alt="avatar" />
      <label className="upload-photo-label">
        <BsUpload color={iconColor} width={16} height={16} />
        <p>Upload a photo</p>
        <input
          type="file"
          name="upload_photo"
          className="photo-input"
          accept=".png, .jpg, .jpeg"
          onChange={onChangeAvatar}
        />
      </label>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <p>Your gender identity</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="Woman"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'Woman'}
            />
            <p>Woman</p>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Man"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'Man'}
            />
            <p>Man</p>
          </label>
        </div>
        <label>
          <p>Your name</p>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            name="name"
            placeholder="Name"
          />
          {formik.touched.repeatNewPassword && formik.errors.name && (
            <p>{formik.errors.name}</p>
          )}
        </label>
        <label>
          <p>E-mail</p>
          <input
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="E-mail"
          />
          {formik.touched.repeatNewPassword && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </label>
        <div>
          <p>Password</p>
          <label>
            <p>Outdated password</p>
            <span>
              <input
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {showPassword ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEye color={iconColor} width={16} height={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEyeOff color={iconColor} width={16} height={16} />
                </button>
              )}
              {formik.touched.repeatNewPassword && formik.errors.password && (
                <p>{formik.errors.password}</p>
              )}
            </span>
          </label>
          <label>
            <p>New Password</p>
            <span>
              <input
                type={showNewPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                onBlur={formik.handleBlur}
                name="newPassword"
                placeholder="Password"
              />
              {showNewPassword ? (
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEye color={iconColor} width={16} height={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEyeOff color={iconColor} width={16} height={16} />
                </button>
              )}
              {formik.touched.repeatNewPassword &&
                formik.errors.newPassword && <p>{formik.errors.newPassword}</p>}
            </span>
          </label>
          <label>
            <p>Repeat new password</p>
            <span>
              <input
                type={showRepeatNewPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                value={formik.values.repeatNewPassword}
                onBlur={formik.handleBlur}
                name="repeatNewPassword"
                placeholder="Password"
              />
              {showRepeatNewPassword ? (
                <button
                  type="button"
                  onClick={() =>
                    setShowRepeatNewPassword(!showRepeatNewPassword)
                  }
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEye color={iconColor} width={16} height={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setShowRepeatNewPassword(!showRepeatNewPassword)
                  }
                  onMouseDown={handleMouseDownPassword}
                >
                  <FiEyeOff color={iconColor} width={16} height={16} />
                </button>
              )}
              {formik.touched.repeatNewPassword &&
                formik.errors.repeatNewPassword && (
                  <p>{formik.errors.repeatNewPassword}</p>
                )}
            </span>
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </SettingModalStyled>
  );
};
