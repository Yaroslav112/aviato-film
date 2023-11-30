import { MovieDataPropTypes } from '../movies/types';

export interface TopImdbPropTypes extends MovieDataPropTypes{
  // adult?: boolean,
  // backdrop_path?: string,
  first_air_date?: string,
  // genre_ids?: [
  //   number
  // ],
  // id?: number,
  media_type?: string,
  name?: string,
  origin_country?: string,
  // original_language?: string,
  original_name?: string,
  // overview?: string,
  // popularity?:number,
  // poster_path?: string,
  // vote_average?:number,
  // vote_count?: number,
}

export interface ActionTopImdbPropTypes {
  type: string,
  topImdb: TopImdbPropTypes[],
  error: null,
}

export interface FetchTopImdbRequestPropTypes {
  page: number,
}
