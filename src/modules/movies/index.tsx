import React, { FC, Key, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Image,
  ImgContainer,
  LoadMoreButton,
  LoadMoreButtonContainer,
  MovieContainer,
  MovieTitle,
  NavContainer,
} from './styles';
import { getMovies as getMoviesSelector } from '../../store/movies/selectors';
import { fetchAllMoviesRequest, resetMovies } from '../../store/movies/actions';
import { MovieProps } from './types';
import { MovieDataTypes } from '../../store/movies/types';
import BriefDescription from '../../library/components/brief-description';
import Header from '../../library/components/header';
import { SpinnerIcon } from '../../assets/spinner';

const Movies:FC = () => {
  const movies: MovieDataTypes[] = useSelector(getMoviesSelector);
  const [nextPage, setNextPage] = useState(2);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetMovies());
    // dispatch(fetchAllMoviesRequest({ page: 1 }))
  }, [location.pathname]);

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
      <NavContainer>
        <Header />
      </NavContainer>
      <MovieContainer>
        {movies?.length ? (
          // todo used index instead of id due to api problems
          movies?.map((movie: MovieProps, index: Key) => (
            <ImgContainer key={index}>
              <BriefDescription movie={movie} />
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
                alt={movie?.title}
              />
              <MovieTitle>{movie?.original_title}</MovieTitle>
            </ImgContainer>
          ))
        ) :  <SpinnerIcon />}
      </MovieContainer>
      <LoadMoreButtonContainer>
        <LoadMoreButton disabled={isMoviesLoading} onClick={getMoreMovies}>
          {isMoviesLoading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      </LoadMoreButtonContainer>
    </>
  );
};

export default Movies;
