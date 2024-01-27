import { LogoutDeleteModalCotntentStyles } from './LogoutDeleteModalContentStyles';
import logOutAPI from 'API/Auth/logOutAPI';
import { useDispatch } from 'react-redux';

const LogoutDeleteModalContent = ({ closeModal, id }) => {
  console.log(closeModal);
  const isDeleteModal = !!id;
  const dispatch = useDispatch();

  const onAcceptClick = () => {
    if (isDeleteModal) {
      //DELETE zapros dispatch(deleteStakan(id)).then(resp => closeModal())
    } else {
      dispatch(logOutAPI());
    }
  };

  return (
    <LogoutDeleteModalCotntentStyles>
      <h2 className="title">{isDeleteModal ? 'Delete entry' : 'Log out'}</h2>
      <p className="message">
        {isDeleteModal
          ? 'Are you sure you want to delete the entry?'
          : 'Do you really want to leave?'}
      </p>
      <div className="btn-container">
        <button className="cancel-btn" type="button" onClick={closeModal}>
          Cancel
        </button>
        <button className="action-btn" type="button" onClick={onAcceptClick}>
          {isDeleteModal ? 'Delete' : 'Log out'}
        </button>
      </div>
    </LogoutDeleteModalCotntentStyles>
  );
};

export default LogoutDeleteModalContent;
