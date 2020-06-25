import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Title be pressed`, () => {
    const onTitleButtonClick = jest.fn();

    const main = shallow(
        <Main title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={filmItems} onTitleButtonClick={onTitleButtonClick}/>
    );

    const titleButton = main.find(`.movie-card__title`);
    titleButton.simulate(`click`);

    expect(onTitleButtonClick.mock.calls.length).toBe(1);
  });
});

