import { useDispatch, useSelector } from 'react-redux';
import { getSeries as getSeriesSelector } from '../../store/series/selectors';
import React, { Key, useEffect, useState } from 'react';
import { fetchAllSeriesRequest, resetSeries } from '../../store/series/actions';
import {
  Image,
  ImgContainer, LoadMoreButton,
  LoadMoreButtonContainer,
  MovieContainer,
  MovieTitle,
} from '../movies/styles';
import BriefDescription from '../../library/components/brief-description';
import { SpinnerIcon } from '../../assets/spinner';
import { SeriesInfoPropTypes } from './types';
import { SeriesPropTypes } from '../../store/series/types';
import withNavigation from '../../library/hocs/with-navigation';

const Series = () => {
  const series: SeriesPropTypes[] = useSelector(getSeriesSelector)
  const [nextPage, setNextPage] = useState<number>(2);
  const [isSeriesLoading, setIsSeriesLoading] = useState<boolean>(false);
  const [hoveredSeries, setHoveredSeries] = useState<Key | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSeries());
  }, []);

  useEffect(() => {
    setNextPage(2);
    dispatch(fetchAllSeriesRequest({ page: 1 }));
  }, []);

  const handleMouseEnter = (index: Key | number) => {
    setHoveredSeries(index);
  };

  const handleMouseLeave = () => {
    setHoveredSeries(null);
  };

  const getMoreSeries = () => {
    if (!isSeriesLoading) {
      setIsSeriesLoading(true);
      setNextPage(nextPage + 1);

      setTimeout(() => {
        dispatch(fetchAllSeriesRequest({ page: nextPage }));
        setIsSeriesLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <>
        <MovieContainer>
          {series?.length ? (
            // todo used index instead of id due to api problems
            series?.map((series: SeriesInfoPropTypes, index: Key | number) => (
              <ImgContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredSeries === index && <BriefDescription entityDescription={series} />}
                <Image
                  src={`https://image.tmdb.org/t/p/w300${series?.poster_path}`}
                  alt={series?.name}
                />
                <MovieTitle>{series?.name}</MovieTitle>
              </ImgContainer>
            ))
          ) : (
            <SpinnerIcon />
          )}
        </MovieContainer>
        <LoadMoreButtonContainer>
          <LoadMoreButton disabled={isSeriesLoading} onClick={getMoreSeries}>
            {isSeriesLoading ? 'Loading...' : 'Load More'}
          </LoadMoreButton>
        </LoadMoreButtonContainer>
      </>
    </div>
  )
}

export default withNavigation(Series);
