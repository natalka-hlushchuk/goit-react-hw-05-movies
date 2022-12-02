import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { findPopularMovie } from 'service/api';
import { Loader, MoviesList } from '../../components/index';
import { HomeStyled, HomeTitle } from 'pages/Home/Home.styled';

const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function findTrendMovies() {
      try {
        const { data } = await findPopularMovie();
        setPopMovies(data.results);
      } catch (error) {
        new Error(Notiflix.Notify.failure(`Request error`));
      } finally {
        setLoading(false);
      }
    }
    findTrendMovies();
  }, []);

  return (
    <HomeStyled>
      <HomeTitle>Trending today</HomeTitle>
      {loading && <Loader />}
      <MoviesList movies={popMovies} />
    </HomeStyled>
  );
};
export default Home;
