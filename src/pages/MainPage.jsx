import FirstTestContent from 'components/Modal/FirstTestContent';
import SecondTestContent from 'components/Modal/SecondTestContent';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

const MainPage = () => {
  const [isShowFirstModal, setIsShowFirstModal] = useState(false);
  const [isShowSecondModal, setIsShowSecondModal] = useState(false);

  return (
    <>
      <div>MainPage</div>
      <button onClick={() => setIsShowFirstModal(true)}>
        Open first modal content
      </button>
      <button onClick={() => setIsShowSecondModal(true)}>
        Open second modal content
      </button>

      {isShowFirstModal && (
        <Modal
          children={<FirstTestContent />}
          closeModal={() => setIsShowFirstModal(false)}
        />
      )}
      {isShowSecondModal && (
        <Modal
          children={<SecondTestContent />}
          closeModal={() => setIsShowSecondModal(false)}
        />
      )}
    </>
  );
};

export default MainPage;
