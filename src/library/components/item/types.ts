import { MovieDataPropTypes } from '../../../store/movies/types';

export type ItemInfoPropTypes = {
  poster_path?: string,
  title?: string
  name?: string,
}

export interface ItemsPropTypes {
  items?: MovieDataPropTypes[],
}
