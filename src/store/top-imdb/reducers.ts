import {
  FETCH_ALL_TOP_IMDB_REQUEST,
  FETCH_ALL_TOP_IMDB_SUCCESS,
  FETCH_ALL_TOP_IMDB_FAILURE,
  RESET_TOP_IMDB,
} from './constants';
import { ActionTopImdbPropTypes } from './types';

const initialState = {
  topImdb: [],
  loading: false,
  error: null,
};

export const topImdbReducer = (state = initialState, action: ActionTopImdbPropTypes) => {
  switch (action.type) {
  case FETCH_ALL_TOP_IMDB_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_ALL_TOP_IMDB_SUCCESS:
    return { ...state, loading: false, topImdb: [...state.topImdb, ...action.topImdb] };
  case FETCH_ALL_TOP_IMDB_FAILURE:
    return { ...state, loading: false, error: action.error };
  case RESET_TOP_IMDB:
    return initialState;
  default:
    return state;
  }
};
