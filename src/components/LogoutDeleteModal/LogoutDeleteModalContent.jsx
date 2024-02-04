import { LogoutDeleteModalContentStyles } from './LogoutDeleteModalContentStyles';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import DeleteDrinkBtn from 'components/DeleteDrinkBtn/DeleteDrinkBtn';

const LogoutDeleteModalContent = ({ closeModal, id }) => {
  const isDeleteModal = !!id;

  return (
    <LogoutDeleteModalContentStyles>
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
        {isDeleteModal ? <DeleteDrinkBtn id={id} /> : <LogoutBtn />}
      </div>
    </LogoutDeleteModalContentStyles>
  );
};

export default LogoutDeleteModalContent;
