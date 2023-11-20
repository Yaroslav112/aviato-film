import {
  FETCH_ALL_SERIES_REQUEST,
  FETCH_ALL_SERIES_SUCCESS,
  FETCH_ALL_SERIES_FAILURE,
  RESET_SERIES,
} from './constants';
import { ActionSeriesPropTypes } from './types';

const initialState = {
  series: [],
  loading: false,
  error: null,
};

export const seriesReducer = (state = initialState, action: ActionSeriesPropTypes) => {
  switch (action.type) {
  case FETCH_ALL_SERIES_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_ALL_SERIES_SUCCESS:
    return { ...state, loading: false, series: [...state.series, ...action.series] };
  case FETCH_ALL_SERIES_FAILURE:
    return { ...state, loading: false, error: action.error };
  case RESET_SERIES:
    return initialState;
  default:
    return state;
  }
};
