import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

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
    const titleButtonClick = jest.fn();

    const main = shallow(
        <Main title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={filmItems} titleButtonClick={titleButtonClick}/>
    );

    const titleButton = main.find(`.catalog__genres-link`);
    titleButton.simulate(`click`);

    expect(titleButtonClick.mock.calls.length).toBe(1);
  });
});


