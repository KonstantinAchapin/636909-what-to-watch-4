import React from 'react';
import PropTypes from 'prop-types';

export const SmallMovieCard = (props) => {
  const {filmTitle, filmImg, onMouseEnter} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter = {onMouseEnter}>
    <div className="small-movie-card__image">
      <img src={filmImg} alt={filmTitle} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{filmTitle}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmImg: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};
