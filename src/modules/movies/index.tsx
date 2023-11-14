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
  NavContainer
} from './styles';
import { getMovies as getMoviesSelector } from '../../store/movies/selectors';
import { fetchAllMoviesRequest, resetMovies } from '../../store/movies/actions';
import { MovieProps } from './types';
import { MovieDataTypes } from '../../store/movies/types';
import BriefDescription from '../../library/components/brief-description';
import Header from '../../library/components/header';

const Movies: FC = () => {
  const movies: MovieDataTypes[] = useSelector(getMoviesSelector);
  const [nextPage, setNextPage] = useState(2);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetMovies())
  }, [location.pathname]);

  useEffect(() => {
    setNextPage(2);
    dispatch(fetchAllMoviesRequest({ page: 1 }));
  }, []);

  const getMoreMovies = () => {
    setNextPage(nextPage + 1);
    dispatch(fetchAllMoviesRequest({ page: nextPage }));
  };

  return (
    <>
      <NavContainer>
        <Header />
      </NavContainer>
      <MovieContainer>
        {movies?.length ? (
          // todo used index instead of id due to api problems
          movies?.map((movie: MovieProps, index: Key ) => (
            <ImgContainer key={index}>
              <BriefDescription movie={movie} />
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
                alt={movie?.title}
              />
              <MovieTitle>{movie?.original_title}</MovieTitle>
            </ImgContainer>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </MovieContainer>
      <LoadMoreButtonContainer>
        <LoadMoreButton onClick={getMoreMovies}>Load More</LoadMoreButton>
      </LoadMoreButtonContainer>
    </>
  );
};

export default Movies;
