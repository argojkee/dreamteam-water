import { useSelector, useDispatch } from 'react-redux';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { ToggleThemeStyles } from './ToggleThemeStyles.styled';

import { ReactComponent as ToggleIcon } from '../../icons/toggleDark/toggle1.svg';

const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(getIsDarkTheme);

  const onToggleThemeBtnClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleThemeStyles>
      <label htmlFor="toggle">
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          onChange={onToggleThemeBtnClick}
          checked={isDarkTheme}
        />
        <ToggleIcon className="hello" />
      </label>
    </ToggleThemeStyles>
  );
};

export default ToggleThemeBtn;
