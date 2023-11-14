import React from 'react';
import { BriefInformationContainer, RatingContainer } from './style';
import ImdbIcon from '../../../assets/imdb';

const BriefInformation = ({ movie }: any ) => {
  const briefTextOverview:string = movie.overview.length > 200 ? movie.overview.slice(0, 200) + '...' : movie.overview;
  const movieRating:number = movie.vote_average.toFixed(1)
  const dateObject:Date = new Date(movie.release_date);
  const releaseDate:number = dateObject.getFullYear();

  return (
    <>
      <BriefInformationContainer>
        <p>{movie?.original_title}</p>
        <p>Brief Info: {briefTextOverview}</p>
        <p>Release Date: {releaseDate}</p>
        <RatingContainer>
          Rating: <ImdbIcon/>
          <p>
            {movieRating}
          </p>
        </RatingContainer>
      </BriefInformationContainer>
    </>
  )
}

export default BriefInformation;
