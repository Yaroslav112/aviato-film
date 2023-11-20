import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllMoviesSuccess,
  fetchAllMoviesFailure,
} from './actions';
import * as constants from './constants';
import { PayloadPropTypes, ResponsePropTypes } from './types';

function* fetchAllMovies({ payload }: PayloadPropTypes) {
  const apiKey = '2efac316711e6f115edeae1c3cbdf500';
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${payload.page}&api_key=${apiKey}`
  // todo trends https://api.themoviedb.org/3/trending/movie/day?language=en-US
  try {
    const response:ResponsePropTypes = yield call(fetch, url);
    const data:ResponsePropTypes = yield call([response, 'json']);

    yield put(fetchAllMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchAllMoviesFailure(error));
  }
}

export function* watchFetchAllMovies() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield takeLatest(constants.FETCH_ALL_MOVIES_REQUEST, fetchAllMovies);
}


