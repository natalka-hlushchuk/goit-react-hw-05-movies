import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovies } from 'service/api';
import { MoviesList, SearchForm, Loader } from '../../components/index';
import { MoviesStyled } from 'pages/Movies/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    async function findMovies() {
      try {
        const { data } = await getMovies(query);
        setMovies(data.results);
      } catch (error) {
        new Error(Notiflix.Notify.failure(`Request error`));
      } finally {
        setLoading(false);
      }
    }
    findMovies();
  }, [query]);
  return (
    <MoviesStyled>
      <SearchForm />
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </MoviesStyled>
  );
};
export default Movies;
