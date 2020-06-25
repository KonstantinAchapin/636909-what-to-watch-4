import React from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from './small-movie-card.jsx';

export class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  _handleMouseEnter(card) {
    this.setState({activeCard: card});
  }

  render() {
    const {films} = this.props;

    return (<div className="catalog__movies-list">
      {films.map((film, index) => <SmallMovieCard key={film.title + index} filmTitle={film.title} filmImg={film.src} onMouseEnter={() => this._handleMouseEnter(film)}/>)}
    </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.object.isRequired
};


