import React, { Key, useState } from 'react';
import { Image, ImgContainer, ItemTitle } from '../../../modules/movies/styles';
import BriefDescription from '../brief-description';
import { ItemInfoPropTypes, ItemsPropTypes } from './types';

const Item = ({ items }: ItemsPropTypes) => {
  const [hoveredItem, setHoveredItem] = useState<Key | null>(null);

  const handleMouseEnter = (index: Key | number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {items?.map((item: ItemInfoPropTypes, index: Key | number) => (
        <ImgContainer
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredItem === index && <BriefDescription entityDescription={item} />}
          <Image
            src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`}
            alt={item?.title || item?.name}
          />
          <ItemTitle>{item?.title || item?.name}</ItemTitle>
        </ImgContainer>
      ))}
    </>
  )
}

export default Item;
