import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';


const init = () => {
  const movieOptions = {
    title: `Hotel Grand Budapest`,
    genre: `Dramas`,
    releaseDate: 2014,
  };

  const filmItems = [{title: `Fantastic Beasts`}, {title: `Bohemian Rhapsody`}, {title: `Macbeth`}, {title: `Fight Club`}];

  ReactDOM.render(<App title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} filmsTitle={filmItems} />, document.getElementById(`root`));
};

init();
