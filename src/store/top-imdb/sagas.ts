import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllTopImdbSuccess,
  fetchAllTopImdbFailure,
} from './actions';
import * as constants from './constants';
import { PayloadPropTypes, ResponsePropTypes } from '../movies/types';

function* fetchAllTopImdb({ payload }: PayloadPropTypes) {
  const apiKey = '2efac316711e6f115edeae1c3cbdf500';
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${payload.page}&api_key=${apiKey}`

  try {
    const response:ResponsePropTypes = yield call(fetch, url);
    const data:ResponsePropTypes = yield call([response, 'json']);

    yield put(fetchAllTopImdbSuccess(data.results));
  } catch (error) {
    yield put(fetchAllTopImdbFailure(error));
  }
}

export function* watchFetchAllTopImdb() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield takeLatest(constants.FETCH_ALL_TOP_IMDB_REQUEST, fetchAllTopImdb);
}


