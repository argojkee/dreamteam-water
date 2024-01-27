import styled from 'styled-components';

export const SettingModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  max-height: 852px;
  border-radius: 10px;
  background-color: #fff;
  padding: 32px 12px;

  .uplad-photo-label {
    display: flex;
  }

  .photo-input {
    opacity: 0;
    width: 1px;
  }
`;
