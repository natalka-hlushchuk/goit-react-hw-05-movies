import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import {
  SearchBarStyled,
  SearchForm,
  ButtonSearchForm,
  InputSearchForm,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [photoName, setPhotoName] = useState('');

  const onChange = e => {
    setPhotoName(e.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (photoName.trim() === '') {
      Notiflix.Notify.warning('Введіть фото');
      return;
    }
    onSubmit(photoName);
    setPhotoName('');
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <ButtonSearchForm type="submit">
          <img
            src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
            alt="seach"
          ></img>
        </ButtonSearchForm>
        <InputSearchForm
          name="photoName"
          value={photoName}
          onChange={onChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
