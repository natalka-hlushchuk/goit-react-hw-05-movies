import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalList,
  AdditionalItem,
} from 'pages/MovieDetails/MovieDetails.styled';

export const AdditionalInfo = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleGoBack = () => {
    //   if (location.state) {
    //     console.log(location.state);
    //     navigate(location.state.from);
    //     return;
    //   }
    //   navigate('/');
  };

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
        <ButtonGoBack onClick={handleGoBack} type="button">
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
          <AdditionalItem to="cast" state={{ from: location }}>
            Cast
          </AdditionalItem>
          <AdditionalItem to="reviews" state={{ from: location }}>
            Reviews
          </AdditionalItem>
        </AdditionalList>
      </AdditionalInfo>
      <Outlet />
    </>
  );
};
