import FirstTestContent from 'components/Modal/FirstTestContent';
import SecondTestContent from 'components/Modal/SecondTestContent';
import { useCustomContext } from 'context/Context';
import { Modal } from 'components/Modal/Modal';

const MainPage = () => {
  const { setContent, setIsShowModal, isShowModal, content } =
    useCustomContext();
  const onFirstClick = () => {
    setIsShowModal(true);
    setContent(<FirstTestContent />);
  };

  const onSecondClick = () => {
    setIsShowModal(true);

    setContent(<SecondTestContent />);
  };

  return (
    <>
      <div>MainPage</div>
      <button onClick={onFirstClick}>Open first modal content</button>
      <button onClick={onSecondClick}>Open second modal content</button>

      {isShowModal && <Modal children={content} />}
    </>
  );
};

export default MainPage;
