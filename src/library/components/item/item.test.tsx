import React from 'react';
import renderer from 'react-test-renderer';
import Item from './index';

const mockItems = [
  {
    index: 1,
    title: 'Some Name 1',
    poster_path: '/poster1.jpg',
  },
  {
    index: 2,
    title: 'Some Name 2',
    poster_path: '/poster2.jpg',
  },
];

test('Media Item renders correctly', () => {
  const tree = renderer.create(<Item items={mockItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});
