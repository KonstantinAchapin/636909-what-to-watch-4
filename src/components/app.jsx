import React from 'react';
import PropTypes from 'prop-types';
import {Main} from './main.jsx';
import {MOVIE_GENRES} from './main.jsx';

export const App = ({title, genre, releaseDate, filmsTitle}) => <Main title={title} genre={genre} releaseDate={releaseDate} filmsTitle={filmsTitle}/>;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.oneOf(MOVIE_GENRES),
  releaseDate: PropTypes.number.isRequired,
  filmsTitle: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired
};
