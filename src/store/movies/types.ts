import { SeriesPropTypes } from '../series/types';
import { TopImdbPropTypes } from '../top-imdb/types';

export interface MovieDataPropTypes {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: [
    number
  ],
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
}

export interface ResponsePropTypes {
  id: number;
  title: string;
  ok: boolean;
  json: any;
  results: MovieDataPropTypes | SeriesPropTypes | TopImdbPropTypes;
}

export type ActionMoviesPropTypes = {
  type: string,
  movies: MovieDataPropTypes[],
  error: null,
}

export type FetchMoviesRequestPropTypes = {
  page?: number
}

export type StatePropTypes = {
  error: null | Error,
  loading: boolean,
  moviesData: {
    movies: MovieDataPropTypes[],
  },
  seriesData: {
    series: SeriesPropTypes[],
  }
  topImdbData: {
    topImdb: TopImdbPropTypes[],
  }
}

export interface PayloadPropTypes {
  payload: {
    page: number
  };
}
