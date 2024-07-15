import axios from "axios";

const API_KEY = "18c9f77b57ec52defb1d2d138b6e4783";
const BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM5Zjc3YjU3ZWM1MmRlZmIxZDJkMTM4YjZlNDc4MyIsIm5iZiI6MTcyMDYxNzQ1Ny43MTcyMjcsInN1YiI6IjY2OGU4NDgxYjAzNWU4MTM0ZDllZDcyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a43fjA95mKmbsYqKpYZfbf82NpWnpk3hdrJv0uzcyDY";

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day?language=en-US", {
    params: {
      api_key: API_KEY
    }  
  });
  console.log(response);
  return response.data.results;
}

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`);
  console.log(response);
  return response.data;
}

export const getMovieCast = async (castId) => {
  const response = await axios.get(`/movie/${castId}/credits?language=en-US`);
  console.log(response);
  return response.data;
}
export const getMovieReviews = async (reviewId) => {
  const response = await axios.get(`/movie/${reviewId}/reviews?language=en-US`);
  console.log(response);
  return response.data.results;
}

export const getMovieByQuery = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,  
    }
  });
  console.log(response);
  return response.data.results;
}
