import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducers';
import { seriesReducer } from './series/reducers';
import { topImdbReducer } from './top-imdb/reducers';

const createRootReducer = () => combineReducers({
  moviesData: moviesReducer,
  seriesData: seriesReducer,
  topImdbData: topImdbReducer,
});

export default createRootReducer;
