import React, { FC, useState, useRef } from 'react';
import { Container, Wrapper } from './styles';
import { QuestionIcon } from '../../../assets/question';
import BriefInformation from '../brief-information';
import { BriefDescriptionPropTypes } from './types';

const BriefDescription: FC<BriefDescriptionPropTypes> = ({ entityDescription }) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false);
  const mediaContentRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    mediaContentRef.current = window.setTimeout(() => {
      setIsDescriptionShown(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (mediaContentRef.current) {
      window.clearTimeout(mediaContentRef.current);
      mediaContentRef.current = null;
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
      {isDescriptionShown && <BriefInformation entityDescription={entityDescription} />}
    </Wrapper>
  );
};

export default BriefDescription;
