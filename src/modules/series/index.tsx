import { useDispatch, useSelector } from 'react-redux';
import { getSeries as getSeriesSelector } from '../../store/series/selectors';
import React, { useEffect, useState } from 'react';
import { fetchAllSeriesRequest, resetSeries } from '../../store/series/actions';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
  Container,
} from '../movies/styles';
import { SpinnerIcon } from '../../assets/spinner';
import { SeriesPropTypes } from '../../store/series/types';
import withNavigation from '../../library/hocs/with-navigation';
import Item from '../../library/components/item';

const Series = () => {
  const series: SeriesPropTypes[] = useSelector(getSeriesSelector)
  const [nextPage, setNextPage] = useState<number>(2);
  const [isSeriesLoading, setIsSeriesLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSeries());
  }, []);

  useEffect(() => {
    setNextPage(2);
    dispatch(fetchAllSeriesRequest({ page: 1 }));
  }, []);

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
    <>
      <Container>
        {series?.length ? (
          <Item items={series} />
        ) : (
          <SpinnerIcon />
        )}
      </Container>
      <LoadMoreButtonContainer>
        <LoadMoreButton disabled={isSeriesLoading} onClick={getMoreSeries}>
          {isSeriesLoading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      </LoadMoreButtonContainer>
    </>
  )
}

export default withNavigation(Series);
