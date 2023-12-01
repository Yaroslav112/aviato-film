import { MovieDataPropTypes } from '../../../store/movies/types';
import { SeriesPropTypes } from '../../../store/series/types';
import { TopImdbPropTypes } from '../../../store/top-imdb/types';

export type ItemInfoPropTypes = {
  poster_path?: string,
  title?: string
  name?: string,
}

export interface ItemsPropTypes {
  items?: MovieDataPropTypes[] | SeriesPropTypes[] | TopImdbPropTypes[],
}
