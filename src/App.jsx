import React, { Component } from 'react';
import {getWeather} from './api/getWeather'

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
    getWeather(this.state.searchInput, this.showWeather.bind(this))
    this.setState({searchInput: ''})
  }

  showWeather(data){
    this.setState({currentWeather: data})
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
          <Forcast forcast={this.state.forcast} />
          : null}
      </div>
      )
  }
}
