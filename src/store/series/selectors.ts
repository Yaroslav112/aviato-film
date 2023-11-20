import { SeriesPropTypes } from './types';
import { StatePropTypes } from '../movies/types';

export const getSeries = (state: StatePropTypes): SeriesPropTypes[] => state?.seriesData?.series;
