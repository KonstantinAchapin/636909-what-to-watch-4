import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card.jsx';

const onMouseEnter = () => {};

const films = [
  {title: `Fantastic Beasts`, src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
  {title: `Johnny English`, src: `img/johnny-english.jpg`},
  {title: `Macbeth`, src: `img/macbeth.jpg`},
  {title: `Midnight Special`, src: `img/midnight-special.jpg`},
  {title: `Mindhunter`, src: `img/mindhunter.jpg`},
  {title: `Pulp Fiction`, src: `img/pulp-fiction.jpg`},
  {title: `War of the worlds`, src: `img/war-of-the-worlds.jpg`},
  {title: `Snatch`, src: `img/snatch.jpg`}
];

describe(`small-movie-card`, () => {
  it(`SmallMovieCard string matching`, () => {
    const tree = renderer.create(films.map((film, index) => <SmallMovieCard key={film.title + index} filmTitle={film.title} filmImg={film.src} onMouseEnter={onMouseEnter}/>)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
