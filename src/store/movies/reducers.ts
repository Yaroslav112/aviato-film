import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_FAILURE,
  RESET_MOVIES,
} from './constants';
import { ActionPropTypes } from './types';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action:ActionPropTypes) => {
  console.log(action, 'action')
  switch (action.type) {
  case FETCH_ALL_MOVIES_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_ALL_MOVIES_SUCCESS:
    return { ...state, loading: false, movies: [...state.movies, ...action.movies] };
  case FETCH_ALL_MOVIES_FAILURE:
    return { ...state, loading: false, error: action.error };
  case RESET_MOVIES:
    return initialState;
  default:
    return state;
  }
};
