import { DailyNormStyles } from './DailyNormStyles.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import EditNormaModal from 'components/EditNormaModal/EditNormaModal';

const DailyNorm = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  return (
    <DailyNormStyles>
      <div className="dailyNormaSection">
        <h2>My daily norma</h2>
        <div className="button-info-container">
          <span>1.5 L</span>
          <button type="button" onClick={() => setIsShowEditModal(true)}>
            Edit
          </button>
        </div>
      </div>

      {isShowEditModal && (
        <Modal
          closeModal={() => setIsShowEditModal(false)}
          children={<EditNormaModal />}
        />
      )}
    </DailyNormStyles>
  );
};

export default DailyNorm;
