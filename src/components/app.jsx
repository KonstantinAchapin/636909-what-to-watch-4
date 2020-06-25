import React from 'react';
import {Main} from './main.jsx';
import {films} from '../mocks/film.js';

const movieOptions = {
  title: `Hotel Grand Budapest`,
  genre: `Dramas`,
  releaseDate: 2014,
};

const onTitleButtonClick = () => {};

export const App = () => <Main title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={films} onTitleButtonClick={onTitleButtonClick}/>;
