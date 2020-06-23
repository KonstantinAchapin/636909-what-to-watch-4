import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SmallMovieCard} from "./small-movie-card.jsx";

const films = [
  {title: `Fantastic Beasts`, src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard`, () => {
  it(`Card hover`, () => {
    const onMouseEnter = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard filmTitle={films.title} filmImg={films.Img} onMouseEnter={onMouseEnter}/>
    );

    const titleButton = smallMovieCard.find(`.small-movie-card`);
    titleButton.simulate(`mouseEnter`);

    expect(onMouseEnter.mock.calls.length).toBe(1);
  });
});

