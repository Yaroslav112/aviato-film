import renderer from 'react-test-renderer';
import React from 'react';
import BriefInformation from './index';

const mockItems = [
  {
    title: 'media content title',
    overview: 'Lorem ipsum Dolor',
    vote_average: 9,
    release_date: 2023
  }
]

test('brief information on hover', () => {
  const briefInformationTree = renderer.create(<BriefInformation entityDescription={mockItems} />).toJSON();
  expect(briefInformationTree).toMatchSnapshot();
})
