import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import {
  MovieDetailsStyled,
  ButtonGoBack,
  MovieInfoStyled,
  MovieName,
  Score,
  SubTitle,
  OverviewText,
  AdditionalInfo,
  GenresItem,
  GenresList,
  AdditionalList,
  AdditionalItem,
} from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const goBackLink =
    `${location?.state?.from}${location?.state?.search}` ?? '/';
  console.log(222222222, location);

  useEffect(() => {
    async function findMovieDetails() {
      try {
        const { data } = await getMovieDetails(id);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    findMovieDetails();
  }, [id]);

  return (
    <>
      <MovieDetailsStyled>
        <ButtonGoBack to={goBackLink}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/45/45510.png"
            alt=""
            width="20px"
          />
          <span>Go back</span>
        </ButtonGoBack>
        <MovieInfoStyled>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width="300px"
            height="300px"
          />
          <div>
            <MovieName>{movieDetails.title}</MovieName>
            <Score>User score: {movieDetails.vote_average}</Score>
            <SubTitle>Overview </SubTitle>
            <OverviewText>{movieDetails.overview}</OverviewText>
            <SubTitle>Genres</SubTitle>
            <GenresList>
              {movieDetails?.genres &&
                movieDetails.genres.map(({ id, name }) => {
                  return <GenresItem key={id}>{name}</GenresItem>;
                })}
            </GenresList>
          </div>
        </MovieInfoStyled>
      </MovieDetailsStyled>
      <AdditionalInfo>
        <SubTitle>Additional information</SubTitle>
        <AdditionalList>
          <AdditionalItem
            to="cast"
            state={{ from: location.state.from, search: location.state.search }}
          >
            Cast
          </AdditionalItem>
          <AdditionalItem
            to="reviews"
            state={{ from: location.state.from, search: location.state.search }}
          >
            Reviews
          </AdditionalItem>
        </AdditionalList>
      </AdditionalInfo>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
