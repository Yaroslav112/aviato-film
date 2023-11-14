import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducers';

const createRootReducer = () => combineReducers({
  moviesData: moviesReducer,
});

export default createRootReducer;
