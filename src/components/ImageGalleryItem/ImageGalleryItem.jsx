import React from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <ImageGalleryItemStyled>
      <Image src={webformatURL} alt="" onClick={() => onClick(largeImageURL)} />
    </ImageGalleryItemStyled>
  );
};
