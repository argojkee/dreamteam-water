import { useSelector, useDispatch } from 'react-redux';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';
import { toggleTheme } from '../../redux/theme/themeSlice';

const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(getIsDarkTheme);

  const onToggleThemeBtnClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button type="button" onClick={onToggleThemeBtnClick}>
      {isDarkTheme ? 'Dark' : 'Light'}
    </button>
  );
};

export default ToggleThemeBtn;
