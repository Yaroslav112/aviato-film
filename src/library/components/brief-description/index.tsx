import React, { FC, useState } from 'react';
import { Container, Wrapper } from './styles';
import { QuestionIcon } from '../../../assets/question';
import BriefInformation from '../brief-information';
import { BriefDescriptionTypes } from './types';

const BriefDescription: FC<BriefDescriptionTypes> = ({ movie }) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  return (
    <Wrapper>
      <Container
        onMouseEnter={() => setIsDescriptionShown(true)}
        onMouseLeave={() => setIsDescriptionShown(false)}
      >
        <QuestionIcon />
      </Container>
      {isDescriptionShown && <BriefInformation movie={movie} />}
    </Wrapper>
  );
}

export default BriefDescription;
