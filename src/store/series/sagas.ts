import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllSeriesSuccess,
  fetchAllSeriesFailure,
} from './actions';
import * as constants from './constants';
import { PayloadPropTypes, ResponsePropTypes } from '../movies/types';

function* fetchAllSeries({ payload }: PayloadPropTypes) {
  const apiKey = '2efac316711e6f115edeae1c3cbdf500';
  const url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${payload.page}&api_key=${apiKey}`

  try {
    const response:ResponsePropTypes = yield call(fetch, url);
    const data:ResponsePropTypes = yield call([response, 'json']);

    yield put(fetchAllSeriesSuccess(data.results));
  } catch (error) {
    yield put(fetchAllSeriesFailure(error));
  }
}

export function* watchFetchAllSeries() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield takeLatest(constants.FETCH_ALL_SERIES_REQUEST, fetchAllSeries);
}


