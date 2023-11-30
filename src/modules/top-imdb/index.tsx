import withNavigation from '../../library/hocs/with-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getTopImdb as getTopImdbSelector } from '../../store/top-imdb/selectors';
import React, { useEffect, useState } from 'react';
import { fetchAllTopImdbRequest, resetTopImdb } from '../../store/top-imdb/actions';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
  Container,
} from '../movies/styles';
import { SpinnerIcon } from '../../assets/spinner';
import Item from '../../library/components/item';

const TopImdb = () => {
  const topImdb = useSelector(getTopImdbSelector)
  const [nextPage, setNextPage] = useState<number>(2);
  const [isTopImdbLoading, setIsTopImdbLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  console.log(topImdb, 'topImdb')
  useEffect(() => {
    dispatch(resetTopImdb());
  }, []);

  useEffect(() => {
    setNextPage(2);
    dispatch(fetchAllTopImdbRequest({ page: 1 }));
  }, []);

  const getMoreTopImdb = () => {
    if (!isTopImdbLoading) {
      setIsTopImdbLoading(true);
      setNextPage(nextPage + 1);

      setTimeout(() => {
        dispatch(fetchAllTopImdbRequest({ page: nextPage }));
        setIsTopImdbLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      <Container>
        {topImdb?.length ? (
          <Item items={topImdb} />
        ) : (
          <SpinnerIcon />
        )}
      </Container>
      <LoadMoreButtonContainer>
        <LoadMoreButton disabled={isTopImdbLoading} onClick={getMoreTopImdb}>
          {isTopImdbLoading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      </LoadMoreButtonContainer>
    </>
  )
}

export default withNavigation(TopImdb);
