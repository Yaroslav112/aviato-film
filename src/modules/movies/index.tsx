import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Container,
  LoadMoreButton,
  LoadMoreButtonContainer,
} from './styles';
import { getMovies as getMoviesSelector } from '../../store/movies/selectors';
import { fetchAllMoviesRequest, resetMovies } from '../../store/movies/actions';
import { MovieDataPropTypes } from '../../store/movies/types';
import { SpinnerIcon } from '../../assets/spinner';
import withNavigation from '../../library/hocs/with-navigation';
import Item from '../../library/components/item';

const Movies: FC = () => {
  const movies: MovieDataPropTypes[] = useSelector(getMoviesSelector);
  const [nextPage, setNextPage] = useState<number>(2);
  const [isMoviesLoading, setIsMoviesLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetMovies());
  }, [location.pathname !== 'movies']);

  useEffect(() => {
    setNextPage(2);
    dispatch(fetchAllMoviesRequest({ page: 1 }));
  }, []);

  const getMoreMovies = () => {
    if (!isMoviesLoading) {
      setIsMoviesLoading(true);
      setNextPage(nextPage + 1);

      setTimeout(() => {
        dispatch(fetchAllMoviesRequest({ page: nextPage }));
        setIsMoviesLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      <Container>
        {movies?.length ? (
          <Item items={movies} />
        ) : (
          <SpinnerIcon />
        )}
      </Container>
      <LoadMoreButtonContainer>
        <LoadMoreButton disabled={isMoviesLoading} onClick={getMoreMovies}>
          {isMoviesLoading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      </LoadMoreButtonContainer>
    </>
  );
};

export default withNavigation(Movies);
