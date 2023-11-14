import React, { useState } from 'react';
import { Container, Wrapper } from './style';
import { Question } from '../../../assets/question';
import BriefInformation from '../brief-information';

const BriefDescription = ({ movie }: any) => {
  const [isDescriptionShown, setIsDescriptionShow] = useState(false);

  return (
    <Wrapper>
      <Container
        onMouseEnter={() => setIsDescriptionShow(true)}
        onMouseLeave={() => setIsDescriptionShow(false)}
        isDescriptionShown={isDescriptionShown}
      >
        <Question />
      </Container>
      {isDescriptionShown ? (
        <BriefInformation movie={movie} />
      ) : null}
    </Wrapper>
  );
}

export default BriefDescription;
