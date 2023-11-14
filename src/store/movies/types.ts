export interface MovieDataTypes {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: [
    number
  ]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export type Movie = {
  movie: MovieDataTypes
}


export interface ResponsePropTypes {
  id: number;
  title: string;
  ok: boolean;
  json: any;
  results: MovieDataTypes;
}

export type ActionPropTypes = {
  type: string,
  movies: MovieDataTypes[],
  error: null,
}

export type FetchMoviesRequestTypes = {
  page?: number
}

export type StateTypes = {
  error: null | string,
  loading: boolean,
  moviesData: {
    movies: MovieDataTypes[],
  }
}
