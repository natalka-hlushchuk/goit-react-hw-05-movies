import React from 'react';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import {
  SearchFormStyled,
  InputSearchForm,
  ButtonSearchForm,
} from 'components/SearchForm/SearchForm.styled';

export const SearchForm = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value.trim() === '')
      return Notiflix.Notify.warning(`Enter the name of the movie`);
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <InputSearchForm
        type="text"
        name="query"
        placeholder="enter the name of the movie"
      />
      <ButtonSearchForm type="submit">Search</ButtonSearchForm>
    </SearchFormStyled>
  );
};
