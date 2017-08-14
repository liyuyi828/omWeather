import axios from 'axios'
import {key} from './apiKey'

const openWeather = 'https://api.openweathermap.org/data/2.5'

let getWeather = function (city) {
  let url = openWeather+'/weather'
  axios.get(url, {
    params: {
      q: city,
      APPID: key
    }
  }).then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}

module.exports = {
  getWeather
}