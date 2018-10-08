import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    console.log(this.props.IMDBRating)
    if (this.props.IMDBRating) {
      return (<img src={imgMapper[this.props.IMDBRating]} alt=""/>)
    } else {
      return (<h4>No Rating Found</h4>)
    }
    // implement meeeee! See the readme for instructions
  }

  genresGenerator = () => {
    // console.log(this.props.genres)
    if (this.props.genres[0] !== 'No Genre(s) Found') {
    return this.props.genres.join(', ')
    } else {
      return 'No Genre(s) Found'
    }
  }


  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        { this.generateRatingElement()}
        <h5 className="genres">{this.genresGenerator()}</h5>
      </div>
    )
  }
}
