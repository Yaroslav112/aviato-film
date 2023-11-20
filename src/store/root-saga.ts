import { all, spawn } from 'redux-saga/effects';
import { watchFetchAllMovies } from './movies/sagas';
import { watchFetchAllSeries } from './series/sagas';

export default function* rootSaga() {
  yield all([
    spawn(watchFetchAllMovies),
    spawn(watchFetchAllSeries)
  ]);
}
