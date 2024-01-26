import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import { ModalStyles } from './ModalStyles.styled';
import { useCustomContext } from 'context/Context';

const modalRoot = document.getElementById('modal-backdrop');

export const Modal = ({ children }) => {
  const { setContent, setIsShowModal } = useCustomContext();

  const closeModal = useCallback(() => {
    setContent(null);
    setIsShowModal(false);
  }, [setContent, setIsShowModal]);

  useEffect(() => {
    function onEsc({ code }) {
      if (code !== 'Escape') {
        return;
      }

      closeModal();
    }
    document.body.style.overflow = 'hidden';
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <ModalStyles onClick={onBackdrop}>
      <div className="modal">
        <button type="button" className="close-btn" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    </ModalStyles>,
    modalRoot
  );
};
