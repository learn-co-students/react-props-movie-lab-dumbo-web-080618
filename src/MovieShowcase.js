import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

   generateMovieCards = () => {
    return movieData.map((movie, index) => {
      // debugger

      return <MovieCard  key={index} title = {movie.title} IMDBRating = {movie.IMDBRating} poster = {movie.poster} genres = {movie.genres}/>
    })
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
