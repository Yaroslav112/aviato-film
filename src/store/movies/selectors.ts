import { MovieDataPropTypes, StatePropTypes } from './types';

export const getMovies = (state: StatePropTypes): MovieDataPropTypes[] => state?.moviesData?.movies;
