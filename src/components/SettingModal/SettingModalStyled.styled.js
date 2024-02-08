import styled from 'styled-components';

export const SettingModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #2f2f2f;
  padding-top: 8px;
  padding-bottom: 8px;

  .setting-title {
    font-size: 26px;
    font-weight: 500;
    line-height: 123%;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .setting-text {
    font-size: 18px;
    font-weight: 500;
    line-height: 111%;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .setting-modal-text {
    margin-bottom: 8px;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .setting-form-text {
    margin-bottom: 12px;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .setting-photo-wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .setting-avatar {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }

  .setting-default-avatar {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: none;
    background-color: #efecec;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
  }

  .upload-photo-label {
    display: flex;
    gap: 8px;
    cursor: pointer;
  }

  .upload-photo-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 128.5%;
    color: ${props => (props.$isDark ? 'orange' : 'var(--primary-color)')};
  }

  .setting-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .setting-form-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .photo-input {
    opacity: 0;
    width: 1px;
  }

  .setting-form-gender-wrapper {
    display: flex;
    gap: 24px;
  }

  .setting-form-gender-label {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    user-select: none;
  }

  .setting-form-gender-button + label::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    flex-grow: 0;
    border: ${props =>
      props.$isDark ? '1px solid orange' : '1px solid rgb(64, 123, 255)'};
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 7px;
  }

  .setting-form-gender-button:not(:disabled):not(:checked)
    + label:hover::before {
    border-color: #b3d7ff;
  }

  .setting-form-gender-button:not(:disabled):active + label::before {
    background-color: var(--primary-button-text-color);
    border-color: #b3d7ff;
  }

  .setting-form-gender-button:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .setting-form-gender-button:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }

  .setting-form-gender-button:checked + label::before {
    border-color: ${props =>
      props.$isDark ? 'orange' : 'var(--primary-color)'};
    background-color: var(--primary-button-text-color);

    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23407BFF'/%3E%3C/svg%3E");
    background-size: auto;
  }

  .setting-form-gender-button {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .setting-form-gender-text {
    font-size: 16px;
    line-height: 125%;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .setting-form-input {
    padding: 12px 36px 12px 10px;
    width: 100%;
    height: 44px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    line-height: 125%;
    color: ${props => (props.$isDark ? 'blue' : 'var(--primary-color)')};
    background-color: ${props => (props.$isDark ? 'gray' : 'white')};
  }

  .setting-form-input:focus {
    border: 1px solid #d7e3ff;
    outline: transparent;
  }

  .setting-form-input:invalid {
    border-color: #ef5050;
    color: #ef5050;
  }

  .setting-form-input-error {
    position: absolute;
    font-size: 14px;
    color: #ef5050;
    font-weight: 400;
    line-height: 128.5%;
  }

  .setting-form-password-icon {
    width: 16px;
    height: 16px;
  }

  .setting-form-password-text {
    line-height: 125%;
  }

  .setting-form-password-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .setting-form-input-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .setting-form-password-button {
    position: absolute;
    top: 12px;
    right: 16px;
    padding: 0;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    line-height: 0;
  }

  .setting-form-submit {
    display: flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--primary-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: transparent;
    color: var(--primary-button-text-color);
    text-align: center;
    font-weight: 500;
    line-height: 125%;
    cursor: pointer;
  }

  .setting-form-submit:hover,
  .setting-form-submit:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 680px;
    height: 812px;
    padding-left: 12px;
    padding-right: 12px;

    .setting-form-input,
    .setting-form-password-wrapper {
      width: 392px;
    }

    .setting-form-submit {
      padding: 10px 30px;
      width: 160px;
      height: 44px;
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1158px) {
    width: 984px;
    height: 544px;

    .setting-form-wrapper {
      display: flex;
      gap: 24px;
    }

    .setting-form-content-wrapper {
      display: block;
    }

    .setting-form-gender-identity-wrapper {
      margin-bottom: 52px;
    }

    .setting-form-name-label {
      display: inline-block;
      margin-bottom: 24px;
    }
  }
`;
