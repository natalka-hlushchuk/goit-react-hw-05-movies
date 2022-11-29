import React, { useState, useEffect } from 'react';
import { searchPhoto } from 'service/api';
import Notiflix from 'notiflix';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/loader';
import { AppStyled } from './App.styled';

const App = () => {
  const [photoName, setPhotoName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [largePhoto, setLargePhoto] = useState('');

  useEffect(() => {
    if (photoName === '') return;
    setLoading(true);
    searchPhoto(photoName, page)
      .then(photos => {
        if (photos.hits.length === 0) {
          Notiflix.Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        setPhotos(prevState => {
          return [...prevState, ...photos.hits];
        });
      })
      .catch(err => new Error(Notiflix.Notify.failure(`Request error`)))
      .finally(() => setLoading(false));
  }, [photoName, page]);

  const handelFormSubmit = photoName => {
    setPhotoName(photoName);
    setPage(1);
    setPhotos([]);
  };

  const onClickModal = url => {
    setLargePhoto(url);
  };

  const onCloseModal = () => {
    setLargePhoto('');
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <AppStyled>
      <SearchBar onSubmit={handelFormSubmit}></SearchBar>
      {loading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={onClickModal}></ImageGallery>
      )}
      {largePhoto && (
        <Modal largePhotoURL={largePhoto} closeModal={onCloseModal} />
      )}
      {photos.length > 0 && <Button onClick={onLoadMore} loading={loading} />}
    </AppStyled>
  );
};

export default App;
