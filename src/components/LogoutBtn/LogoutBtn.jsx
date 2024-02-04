import { useDispatch } from 'react-redux';
import logOutAPI from 'API/Auth/logOutAPI';
import { PiSpinnerGap } from 'react-icons/pi';
import { getIsDeleting } from '../../redux/water/waterSelectors';
import { useSelector } from 'react-redux';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsDeleting);

  const onLogoutPress = () => {
    dispatch(logOutAPI());
  };
  return (
    <button className="action-btn" onClick={onLogoutPress}>
      {isLoading ? <PiSpinnerGap className="spinner" size={16} /> : 'Log out'}
    </button>
  );
};

export default LogoutBtn;
