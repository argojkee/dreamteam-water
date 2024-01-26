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
    height: 500px;
    width: 80%;
    max-height: 95%;
    position: absolute;
    background-color: rgba(255, 248, 220, 1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 50px 20px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .modal {
      width: 500px;
    }
  }

  .close-btn {
    position: absolute;
    right: 30px;
    top: 18px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    color: tomato;
    transition: 250ms linear;
  }

  .close-btn:hover,
  .close-btn:focus {
    color: blue;
  }
`;
