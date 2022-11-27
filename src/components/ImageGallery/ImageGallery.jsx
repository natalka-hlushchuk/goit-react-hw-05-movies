import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ImageGalleryStyled>
      {photos.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImageGalleryStyled>
  );
};
