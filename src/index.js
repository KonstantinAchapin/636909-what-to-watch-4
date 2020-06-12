import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';

const init = () => {
  const movieOptions = {
    title: `Hotel Grand Budapest`,
    genre: `Adventure`,
    releaseDate: `2014`
  };

  ReactDOM.render(<App title={movieOptions.title} genre={movieOptions.genre} releaseDate={movieOptions.releaseDate} />, document.getElementById(`root`));
};

init();
