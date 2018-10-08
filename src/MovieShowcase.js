import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // console.log(movieData)
    return movieData.map((movieObj) => {

        return <MovieCard title={movieObj.title} poster={movieObj.poster} IMDBRating={movieObj.IMDBRating} genres={movieObj.genres}/>
    })

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
