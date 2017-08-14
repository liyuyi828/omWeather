import axios from 'axios'
import {key} from './apiKey'

const openWeather = 'https://api.openweathermap.org/data/2.5'

let getWeather = function (city, currentWeatherCallback, forcastCallback) {
  let urlWeather = openWeather+'/weather'
  let urlForcast = openWeather+'/forecast'
  let query = {
    params: {
      q: city,
      APPID: key
    }
  }
  axios.get(urlWeather, query).then(response => {
    console.log(response.data)
    currentWeatherCallback(response.data)
  })
  axios.get(urlForcast, query).then(response => {
    console.log(response.data)
    forcastCallback(response.data.list)
  })
}

module.exports = {
  getWeather
}