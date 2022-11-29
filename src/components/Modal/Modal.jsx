import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export const Modal = ({ closeModal, largePhotoURL }) => {
  const handelKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );
  const handelBackDropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handelKeyDown);

    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [handelKeyDown]);
  return (
    <Overlay onClick={handelBackDropClick}>
      <ModalStyled>
        <img src={largePhotoURL} alt="" />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largePhotoURL: PropTypes.string.isRequired,
};
