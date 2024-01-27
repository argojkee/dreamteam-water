import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 250ms linear;

  .modal {
    position: relative;
    max-width: 90%;
    max-height: 95%;
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 24px 32px;
  }

  .close-btn {
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 36px;
    background-color: transparent;
    transition: 250ms linear;
    border: none;
  }

  .close-modal {
    width: 24px;
    height: 24px;
    fill: #407bff;
  }
  @media screen and (max-width: 767px) {
    .modal {
      width: 80%;
    }
  }
`;
