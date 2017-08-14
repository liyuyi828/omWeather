import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    // getTimelines(this.props.users, this.props.updateTimelines.bind(this)); 
  }

  render(){
    return (
      <div>
        <h1>Oh My Weather</h1>
      </div>
      )
  }
}
