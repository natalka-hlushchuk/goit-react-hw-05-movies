import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '1c132fe45ecd58a684e8db3e61164617';

export async function findPopularMovie() {
  try {
    const response = await axios.get(
      `/movie/popular?api_key=${KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCast(id) {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
getCast(56774);

export async function getReviews(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMovies(movie) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&limit=20&query=${movie}`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
