import React from 'react';
import {SmallMovieCard} from './small-movie-card.jsx';
import {films} from '../mocks/film.js';

export class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._mouseEnter = this._mouseEnter.bind(this);
  }

  _mouseEnter(card) {
    this.setState({activeCard: card});
  }

  render() {
    return (<div className="catalog__movies-list">
      {films.map((film, index) => <SmallMovieCard key={film.title + index} filmTitle={film.title} filmImg={film.src} onMouseEnter={() => this._mouseEnter(film)}/>)}
    </div>
    );
  }
}


