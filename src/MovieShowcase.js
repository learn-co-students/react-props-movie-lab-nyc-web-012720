import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import chicken from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your chicken array and return an array of the correct JSX
    return chicken.map( (x, index) =>
      < MovieCard 
      key={index}
      title={x.title}
      IMDBRating={x.IMDBRating}
      genres={x.genres}
      poster={x.poster}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
