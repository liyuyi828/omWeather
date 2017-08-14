import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  render(){
    let {name, main} = this.props.currentWeather
    return (
      <div>
        <h2>{name}</h2> 
        <p>{`Temperature(C): ${main.temp - 273.15}`}</p>
        <p>{`Humidity(%): ${main.humidity}%`}</p>
        <p>{`Today's High(C): ${main.temp_max - 273.15}`}</p>
        <p>{`Today's Low(C): ${main.temp_min - 273.15}`}</p>
      </div>
      )
  }
}
