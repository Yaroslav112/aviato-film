import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_FAILURE,
  FETCH_ALL_MOVIES_SUCCESS,
  RESET_MOVIES,
} from './constants';
import { FetchMoviesRequestPropTypes, MovieDataPropTypes } from './types';

export const fetchAllMoviesRequest = (data: FetchMoviesRequestPropTypes) => ({
  type: FETCH_ALL_MOVIES_REQUEST,
  payload: data,
});

export const fetchAllMoviesSuccess = (movies: MovieDataPropTypes) => ({
  type: FETCH_ALL_MOVIES_SUCCESS,
  movies,
});

export const fetchAllMoviesFailure = (error: Error | unknown) => ({
  type: FETCH_ALL_MOVIES_FAILURE,
  error,
});

export const resetMovies = () => ({
  type: RESET_MOVIES,
})
