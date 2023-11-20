import {
  FETCH_ALL_SERIES_REQUEST,
  FETCH_ALL_SERIES_FAILURE,
  FETCH_ALL_SERIES_SUCCESS,
  RESET_SERIES,
} from './constants';
import { FetchSeriesRequestPropTypes, SeriesPropTypes } from './types';

export const fetchAllSeriesRequest = (data: FetchSeriesRequestPropTypes) => ({
  type: FETCH_ALL_SERIES_REQUEST,
  payload: data,
});

export const fetchAllSeriesSuccess = (series: SeriesPropTypes) => ({
  type: FETCH_ALL_SERIES_SUCCESS,
  series,
});

export const fetchAllSeriesFailure = (error: Error | unknown) => ({
  type: FETCH_ALL_SERIES_FAILURE,
  error,
});

export const resetSeries = () => ({
  type: RESET_SERIES,
})
