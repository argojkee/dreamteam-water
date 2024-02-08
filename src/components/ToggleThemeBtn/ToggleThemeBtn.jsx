import { useSelector, useDispatch } from 'react-redux';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { ToggleThemeStyles } from './ToggleThemeStyles.styled';

const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(getIsDarkTheme);

  const onToggleThemeBtnClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleThemeStyles>
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={onToggleThemeBtnClick}
          id="slider"
          checked={isDarkTheme}
        />
        <span className="slider round"></span>
      </label>
    </ToggleThemeStyles>
  );
};

export default ToggleThemeBtn;
