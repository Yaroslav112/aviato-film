import React, { FC } from 'react';
import { ScrollContainer, ScrollContent } from './styles';
import { CustomScrollPropTypes } from './types';

const CustomScroll: FC<CustomScrollPropTypes> = ({ children }) => {
  return (
    <ScrollContainer>
      <ScrollContent>{children}</ScrollContent>
    </ScrollContainer>
  );
};

export default CustomScroll;
