import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <ImageGalleryItemStyled>
      <Image src={webformatURL} alt="" onClick={() => onClick(largeImageURL)} />
    </ImageGalleryItemStyled>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
