import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }

  handelKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handelBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handelBackDropClick}>
        <ModalStyled>
          <img src={this.props.largePhotoURL} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largePhotoURL: PropTypes.string.isRequired,
};
