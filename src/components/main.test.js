import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

const movieOptions = {
  title: `Hotel Grand Budapest`,
  genre: `Dramas`,
  releaseDate: 2014,
};

const filmItems = [
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`},
  {title: `Fight Club`}
];

describe(`main`, () => {
  it(`Main string matching`, () => {
    const tree = renderer.create(<Main title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={filmItems}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
