import React from 'react';
import {Main} from './main.jsx';


export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, releaseDate, filmsTitle} = props;
  return <React.Fragment>
    <Main title={title} genre={genre} releaseDate={releaseDate} filmsTitle={filmsTitle}/>
  </React.Fragment>;
};
