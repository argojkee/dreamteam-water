import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';

const MainPage = () => {
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  return (
    <>
      <div>MainPage</div>

      <button onClick={() => setIsShowLogoutModal(true)}>Logout</button>
      <button onClick={() => setIsShowDeleteModal(true)}>Delete</button>

      {isShowLogoutModal && (
        <Modal
          children={
            <LogoutDeleteModalContent
              closeModal={() => setIsShowLogoutModal(false)}
            />
          }
          closeModal={() => setIsShowLogoutModal(false)}
        />
      )}
      {isShowDeleteModal && (
        <Modal
          children={
            <LogoutDeleteModalContent
              id={1}
              closeModal={() => setIsShowDeleteModal(false)}
            />
          }
          closeModal={() => setIsShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default MainPage;
