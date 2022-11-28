import React, { Component } from 'react';
import { searchPhoto } from 'service/api';
import Notiflix from 'notiflix';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/loader';
import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    photoName: '',
    photos: [],
    loading: false,
    page: 1,
    largePhoto: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, photoName } = this.state;
    if (prevState.page !== page || prevState.photoName !== photoName) {
      this.setState({ loading: true });
      searchPhoto(photoName, page)
        .then(photos => {
          if (photos.hits.length === 0) {
            Notiflix.Notify.info(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos.hits],
          }));
        })
        .catch(err => new Error(Notiflix.Notify.failure(`Request error`)))
        .finally(() => this.setState({ loading: false }));
    }
    return;
  }

  handelFormSubmit = photoName => {
    this.setState({ photoName });
  };
  onClickModal = url => {
    this.setState({ largePhoto: url });
  };
  onCloseModal = () => {
    this.setState({
      largePhoto: '',
    });
  };
  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <AppStyled>
        <SearchBar onSubmit={this.handelFormSubmit}></SearchBar>
        {this.state.loading && <Loader />}
        {this.state.photos.length > 0 && (
          <ImageGallery
            photos={this.state.photos}
            onClick={this.onClickModal}
          ></ImageGallery>
        )}
        {this.state.largePhoto && (
          <Modal
            largePhotoURL={this.state.largePhoto}
            closeModal={this.onCloseModal}
          />
        )}
        {this.state.photos.length > 0 && (
          <Button onClick={this.onLoadMore} loading={this.state.loading} />
        )}
      </AppStyled>
    );
  }
}

export default App;

// async function onSubmitForm(e) {
//   e.preventDefault();
//   loadMore.classList.add('is-hidden');
//   if (e.target.tagName !== 'FORM') return;
//   clearPhotoList();
//   newsApi.query = e.target.elements.searchQuery.value.trim();
//   if (!newsApi.query)
//     return Notiflix.Notify.info('Sorry, you need to enter a value');
//   newsApi.resetPage();
//   try {
//     let response = await newsApi.fetchPhoto();
//     let totalHits = response.data.totalHits;
//     if (totalHits > 0)
//       Notiflix.Notify.info(`Hooray! We found ${totalHits} images`);
//     let setPhotos = response.data.hits;
//     if (setPhotos.length === 0) {
//       Notiflix.Notify.info(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       createMarkUpPhoto(gallery, setPhotos);
//       lightbox.refresh();
//       if (totalHits < newsApi.per_page) {
//         loadMore.classList.add('is-hidden');
//       } else loadMore.classList.remove('is-hidden');
//     }
//   } catch (error) {
//     Notiflix.Notify.failure(`Request error`);
//   }
// }

// async function onLoadMore(e) {
//   loadMore.classList.add('is-hidden');
//   if (e.target.tagName !== 'BUTTON') return;
//   try {
//     let response = await newsApi.fetchPhoto();
//     let setPhotos = response.data.hits;

//     createMarkUpPhoto(gallery, setPhotos);
//     lightbox.refresh();
//     scrollTo();
//     if ((newsApi.page - 1) * newsApi.per_page > response.data.totalHits) {
//       loadMore.classList.add('is-hidden');
//       Notiflix.Notify.info(
//         "We're sorry, but you've reached the end of search results"
//       );
//     } else {
//       loadMore.classList.remove('is-hidden');
//     }
//   } catch (error) {
//     Notiflix.Notify.failure(`Request error`);
//   }
// }
