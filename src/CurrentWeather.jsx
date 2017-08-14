import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  render(){
    let {name, main} = this.props.currentWeather
    return (
      <div>
        <h2>{name}</h2> 
        <p>{`Temperature: ${main.temp}`}</p>
        <p>{`Humidity: ${main.humidity}%`}</p>
        <p>{`Today's High: ${main.temp_max - 273.15}`}</p>
        <p>{`Today's Low: ${main.temp_min - 273.15}`}</p>
      </div>
      )
  }
}
