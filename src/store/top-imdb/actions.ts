import {
  FETCH_ALL_TOP_IMDB_REQUEST,
  FETCH_ALL_TOP_IMDB_FAILURE,
  FETCH_ALL_TOP_IMDB_SUCCESS,
  RESET_TOP_IMDB,
} from './constants';
import { FetchTopImdbRequestPropTypes, TopImdbPropTypes } from './types';

export const fetchAllTopImdbRequest = (data: FetchTopImdbRequestPropTypes) => ({
  type: FETCH_ALL_TOP_IMDB_REQUEST,
  payload: data,
});

export const fetchAllTopImdbSuccess = (topImdb: TopImdbPropTypes) => ({
  type: FETCH_ALL_TOP_IMDB_SUCCESS,
  topImdb,
});

export const fetchAllTopImdbFailure = (error: Error | unknown) => ({
  type: FETCH_ALL_TOP_IMDB_FAILURE,
  error,
});

export const resetTopImdb = () => ({
  type: RESET_TOP_IMDB,
})
