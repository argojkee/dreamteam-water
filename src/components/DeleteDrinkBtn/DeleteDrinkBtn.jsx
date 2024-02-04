import { useDispatch } from 'react-redux';
import { deleteDrinkThunk } from '../../redux/water/waterFunctions';
import { PiSpinnerGap } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { getIsDeleting } from '../../redux/water/waterSelectors';

const DeleteDrinkBtn = ({ id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsDeleting);

  const onDeletePress = () => {
    dispatch(deleteDrinkThunk(id));
  };
  return (
    <button className="action-btn" onClick={onDeletePress}>
      {isLoading ? <PiSpinnerGap className="spinner" size={16} /> : 'Delete'}
    </button>
  );
};

export default DeleteDrinkBtn;
