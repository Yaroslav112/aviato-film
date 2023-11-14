import { MovieDataTypes, StateTypes } from './types';

export const getMovies = (state: StateTypes): MovieDataTypes[] => state?.moviesData?.movies;
