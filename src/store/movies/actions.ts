import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_FAILURE,
  FETCH_ALL_MOVIES_SUCCESS,
  RESET_MOVIES,
} from './constants';
import { FetchMoviesRequestTypes, MovieDataTypes } from './types';

export const fetchAllMoviesRequest = (data: FetchMoviesRequestTypes) => ({
  type: FETCH_ALL_MOVIES_REQUEST,
  payload: data,
});

export const fetchAllMoviesSuccess = (movies: MovieDataTypes) => ({
  type: FETCH_ALL_MOVIES_SUCCESS,
  movies,
});

export const fetchAllMoviesFailure = (error: any) => ({
  type: FETCH_ALL_MOVIES_FAILURE,
  error,
});

export const resetMovies = () => ({
  type: RESET_MOVIES,
})
