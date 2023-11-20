import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducers';
import { seriesReducer } from './series/reducers';

const createRootReducer = () => combineReducers({
  moviesData: moviesReducer,
  seriesData: seriesReducer,
});

export default createRootReducer;
