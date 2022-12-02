import React from 'react';
import PropTypes from 'prop-types';
import {
  MoviesListStyled,
  MoviesItem,
} from 'components/MoviesList/MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {movies.map(({ title, id }) => {
        return (
          <MoviesItem
            key={id}
            to={`/movies/${id}`}
            state={{ from: location.pathname, search: location.search }}
          >
            {title}
          </MoviesItem>
        );
      })}
    </MoviesListStyled>
  );
};

MoviesList.PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
);
