import { all, spawn } from 'redux-saga/effects';
import { watchFetchAllMovies } from './movies/sagas';

export default function* rootSaga() {
  yield all([
    spawn(watchFetchAllMovies),
  ]);
}
