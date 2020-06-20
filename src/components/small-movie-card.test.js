import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card.jsx';

const filmItems = [
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`},
  {title: `Fight Club`}
];

describe(`small-movie-card`, () => {
  it(`SmallMovieCard string matching`, () => {
    const tree = renderer.create(filmItems.map((film, index) => <SmallMovieCard key={film.title + index} filmTitle={film.title} />)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
