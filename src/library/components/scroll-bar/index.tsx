import React, { FC } from 'react';
import { ScrollContainer, ScrollContent } from './styles';
import { CustomScrollProps } from './types';

const CustomScroll: FC<CustomScrollProps> = ({ children }) => {
  return (
    <ScrollContainer>
      <ScrollContent>{children}</ScrollContent>
    </ScrollContainer>
  );
};

export default CustomScroll;
