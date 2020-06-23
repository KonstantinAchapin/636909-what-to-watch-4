import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';
import {films} from './mocks/film.js';


const init = () => {
  const movieOptions = {
    title: `Hotel Grand Budapest`,
    genre: `Dramas`,
    releaseDate: 2014,
  };

  ReactDOM.render(<App title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={films} />, document.getElementById(`root`));
};

init();
