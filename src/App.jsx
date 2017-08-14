import React, { Component } from 'react';
import {getWeather} from './api/getWeather'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: ''
    }
  }

  componentDidMount(){
    // getWeather()
  }

  handleSearchInputChange(e){
    this.setState({searchInput: e.target.value})
  }


  getWeather(){
    getWeather(this.state.searchInput, this.showWeather.bind(this), this.showForecast.bind(this))
    this.setState({searchInput: ''})
  }

  showWeather(data){
    console.log('currentWeather got called')
    this.setState({currentWeather: data})
  }

  showForecast(list){
    console.log('forecast got called')
    let sortedList = list.sort((a, b) => a.dt - b.dt)
    console.log(sortedList)
    this.setState({forecast: sortedList})
  }

  render(){
    return (
      <div>
        <h1>Oh My Weather</h1>
        <input value={this.state.searchInput}
          onChange={this.handleSearchInputChange.bind(this)}
          />
        <button onClick={this.getWeather.bind(this)}>Get Weather</button>
        {this.state.currentWeather ? 
          <CurrentWeather currentWeather={this.state.currentWeather}/>
          : null}
        {this.state.forcast ? 
          <Forecast forcast={this.state.forcast} />
          : null}
      </div>
      )
  }
}
