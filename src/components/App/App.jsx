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
    this.setState({ photoName, page: 1 });
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
