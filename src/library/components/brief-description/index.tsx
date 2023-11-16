import React, { FC, useState, useRef } from 'react';
import { Container, Wrapper } from './styles';
import { QuestionIcon } from '../../../assets/question';
import BriefInformation from '../brief-information';
import { BriefDescriptionPropTypes } from './types';

const BriefDescription: FC<BriefDescriptionPropTypes> = ({ movie }) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false);
  const onMovieHoverRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    onMovieHoverRef.current = window.setTimeout(() => {
      setIsDescriptionShown(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (onMovieHoverRef.current) {
      window.clearTimeout(onMovieHoverRef.current);
      onMovieHoverRef.current = null;
    }

    setIsDescriptionShown(false);
  };

  return (
    <Wrapper>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <QuestionIcon />
      </Container>
      {isDescriptionShown && <BriefInformation movie={movie} />}
    </Wrapper>
  );
};

export default BriefDescription;
