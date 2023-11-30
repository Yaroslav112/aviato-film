import { all, spawn } from 'redux-saga/effects';
import { watchFetchAllMovies } from './movies/sagas';
import { watchFetchAllSeries } from './series/sagas';
import { watchFetchAllTopImdb } from './top-imdb/sagas';

export default function* rootSaga() {
  yield all([
    spawn(watchFetchAllMovies),
    spawn(watchFetchAllSeries),
    spawn(watchFetchAllTopImdb),
  ]);
}
