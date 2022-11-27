import React from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <ImageGalleryItemStyled>
      <Image src={webformatURL} alt="" />
    </ImageGalleryItemStyled>
  );
};
