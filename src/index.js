import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';


const init = () => {
  const movieOptions = {
    title: `Hotel Grand Budapest`,
    genre: `Adventure`,
    releaseDate: `2014`,
    filmsTitle: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Godfather`, `Inception`, `Fight Club`, `Parasite`, `Leon`]
  };

  ReactDOM.render(<App title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={movieOptions.filmsTitle} />, document.getElementById(`root`));
};

init();
