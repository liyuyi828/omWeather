import React, { Component } from 'react';
import c3 from 'c3'
import moment from 'moment'

const GRAPH_ID = 'uniqueID'

export default class Forecast extends Component {

  componentDidMount() {
    if (this.props.forecast !== undefined && this.props.forecast.length > 0) {
      // console.log('this shit got called')
      this.renderChart()
    }
  }

  componentDidUpdate() {
    if (this.props.forecast !== undefined && this.props.forecast.length > 0) {
      // console.log('this crab got called')
      this.renderChart()
    }
  }

  renderChart(){
    let config = this.getChartConfig()
    c3.generate(config)
  }

  getChartConfig(){
    let columns = this.getChartColumns()
    return {
      bindto: `#${GRAPH_ID}`, 
      data: {
        x: 'x',
        columns: columns
      },
      legend: {show: false},
      size: {
        width: 960,
        height: 480
      },
      point: {
        show: true,
        r: 2
      },
      axis: {
        y: {
          label: {
            text: 'Temp (C)',
            position: 'outer-middle'
          },
        },
        x: {
          label: {
            text: 'date/time',
            position: 'outer-center'
          },
          tick: {
            culling: false,
            outer: true,
            format: function (d) {
              var time = moment.unix(d)
              if ((time.hour() + 1) % 12 === 0) {
                return time.format('M/D hA')
              } else {
                return ''
              }
            }
          }
        }
      }

    }
  }

  getChartColumns(){
    let timeArray = ['x']
    let tempArray = ['temp']
    this.props.forecast.forEach(data => {
      timeArray.push(data.dt)
      tempArray.push(data.main.temp - 273.15)
    })
    return [timeArray, tempArray]
  }

  render(){
    return (
      <div>
        <h2>{'5 Days Forecast'}</h2>
        <div id={GRAPH_ID}></div>
      </div>
      )
  }
}
