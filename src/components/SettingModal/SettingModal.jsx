import { useFormik } from 'formik';
import { IoClose } from 'react-icons/io5';
import { SettingModalStyled } from './SettingModal.styled';
import { useState } from 'react';
import * as yup from 'yup';
import { ReactComponent as UploadPhotoIcon } from '../../icons/upload_photo_icon.svg';
import { ReactComponent as HidenPasswordIcon } from '../../icons/hidden_passsword_icon.svg';
import { ReactComponent as ShowedPasswordIcon } from '../../icons/showed_password_icon.svg';

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
  newPassword: yup.string().min(8, 'Password must be at least 8 characters.').when('repeatNewPassword', ([repeatNewPassword], schema) => {
    return repeatNewPassword !== '' ? schema.required() : schema.notRequired()
  }),
  repeatNewPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters.').oneOf([yup.ref("newPassword")], "Passwords do not match")
});

export const SettingModal = () => {
  const [showPassword, setShowPassoword] = useState(false);
  const [showNewPassword, setShowNewPassoword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassoword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
      <h2>Setting</h2>
      <button type="button">
        <IoClose color="#407BFF" size={24} />
      </button>
      <p>Your photo</p>
      <img src="" alt="avatar" />
      <label className="uplad-photo-label">
        <UploadPhotoIcon />
        <p>Upload a photo</p>
        <input type="file" name="upload_photo" className="photo-input" />
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
                  onClick={() => setShowPassoword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <ShowedPasswordIcon />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPassoword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <HidenPasswordIcon />
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
                  onClick={() => setShowNewPassoword(!showNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <ShowedPasswordIcon />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowNewPassoword(!showNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <HidenPasswordIcon />
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
                    setShowRepeatNewPassoword(!showRepeatNewPassword)
                  }
                  onMouseDown={handleMouseDownPassword}
                >
                  <ShowedPasswordIcon />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setShowRepeatNewPassoword(!showRepeatNewPassword)
                  }
                  onMouseDown={handleMouseDownPassword}
                >
                  <HidenPasswordIcon />
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
