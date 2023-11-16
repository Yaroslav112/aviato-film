import React, { FC } from 'react';
import { BriefInformationContainer, RatingContainer } from './styles';
import ImdbIcon from '../../../assets/imdb';
import { BriefDescriptionTypes } from '../brief-description/types';

const BriefInformation: FC<BriefDescriptionTypes> = ({ movie }) => {
  const briefTextLength: boolean | 0 | undefined = movie?.overview?.length && movie?.overview?.length > 200;
  const briefTextOverview: string | undefined = briefTextLength ? movie?.overview?.slice(0, 200) + '...' : movie?.overview;
  const movieRating: string | number = movie?.vote_average?.toFixed(1) || 0;
  const dateObject: Date = new Date(movie?.release_date || '');
  const releaseDate: number = dateObject?.getFullYear() || 0;

  return (
    <>
      <BriefInformationContainer>
        <p>{movie?.original_title || ''}</p>
        <p>Brief Info: {briefTextOverview}</p>
        <p>Release Date: {releaseDate}</p>
        <RatingContainer>
          Rating: <ImdbIcon />
          <p>{movieRating}</p>
        </RatingContainer>
      </BriefInformationContainer>
    </>
  );
};

export default BriefInformation;
