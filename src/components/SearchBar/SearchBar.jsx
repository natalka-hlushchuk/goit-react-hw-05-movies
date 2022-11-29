import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import {
  SearchBarStyled,
  SearchForm,
  ButtonSearchForm,
  InputSearchForm,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    photoName: '',
  };
  onChange = e => {
    this.setState({ photoName: e.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.photoName.trim() === '') {
      Notiflix.Notify.warning('Введіть фото');
      return;
    }
    this.props.onSubmit(this.state.photoName);
    this.setState({ photoName: '' });
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonSearchForm type="submit">
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
              alt="seach"
            ></img>
          </ButtonSearchForm>
          <InputSearchForm
            name="photoName"
            value={this.state.photoName}
            onChange={this.onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
