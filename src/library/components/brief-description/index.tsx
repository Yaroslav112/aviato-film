import React, { FC, useState, useRef } from 'react';
import { Container, Wrapper } from './styles';
import { QuestionIcon } from '../../../assets/question';
import BriefInformation from '../brief-information';
import { BriefDescriptionTypes } from './types';

const BriefDescription: FC<BriefDescriptionTypes> = ({ movie }) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const onHoverRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    onHoverRef.current = window.setTimeout(() => {
      setIsDescriptionShown(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (onHoverRef.current) {
      window.clearTimeout(onHoverRef.current);
      onHoverRef.current = null;
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
