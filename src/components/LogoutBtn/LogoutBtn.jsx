import operations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const onLogoutPress = () => {
    dispatch(operations.logOut());
  };
  return (
    <button onClick={onLogoutPress} style={{ fontFamily: 'Roboto' }}>
      Log out
    </button>
  );
};

export default LogoutBtn;
