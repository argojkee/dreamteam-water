import { DailyNormStyles } from './DailyNormStyles.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import EditNormaModal from 'components/EditNormaModal/EditNormaModal';
import { useSelector } from 'react-redux';
import { getCurrentNorm } from '../../redux/water/waterSelectors';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';

const DailyNorm = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const norm = useSelector(getCurrentNorm);
  const isDark = useSelector(getIsDarkTheme);

  return (
    <DailyNormStyles $isDark={isDark}>
      <div className="dailyNormaSection">
        <h2>My daily norma</h2>
        {norm !== undefined ? (
          <div className="button-info-container">
            <span>{Math.round((norm / 1000) * 10) / 10} L</span>
            <button type="button" onClick={() => setIsShowEditModal(true)}>
              Edit
            </button>
          </div>
        ) : null}
      </div>

      {isShowEditModal && (
        <Modal
          closeModal={() => setIsShowEditModal(false)}
          children={
            <EditNormaModal closeModal={() => setIsShowEditModal(false)} />
          }
        />
      )}
    </DailyNormStyles>
  );
};

export default DailyNorm;
