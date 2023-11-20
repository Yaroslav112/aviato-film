import React, { FC } from 'react';
import { BriefInformationContainer, RatingContainer } from './styles';
import ImdbIcon from '../../../assets/imdb';
import { BriefDescriptionPropTypes } from '../brief-description/types';

const BriefInformation: FC<BriefDescriptionPropTypes> = ({ entityDescription }) => {
  const briefName: string | undefined = entityDescription?.title || entityDescription?.name;
  const briefTextLength: boolean | 0 | undefined = entityDescription?.overview?.length && entityDescription?.overview?.length > 200;
  const briefTextOverview: string = briefTextLength ? entityDescription?.overview?.slice(0, 200) + '...' : entityDescription?.overview;
  const MediaContentRating: string | number = entityDescription?.vote_average?.toFixed(1) || 0;
  const dateObject: Date = new Date(entityDescription?.release_date || entityDescription?.first_air_date);
  const releaseDate: number = dateObject?.getFullYear() || 0;

  return (
    <>
      <BriefInformationContainer>
        <p>{briefName}</p>
        <p>Brief Info: {briefTextOverview}</p>
        <p>Release Date: {releaseDate}</p>
        <RatingContainer>
          Rating: <ImdbIcon />
          <p>{MediaContentRating}</p>
        </RatingContainer>
      </BriefInformationContainer>
    </>
  );
};

export default BriefInformation;
