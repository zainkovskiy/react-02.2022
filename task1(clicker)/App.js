import React, { Component } from 'react';

export class App extends Component{
  state = {
    count: 0,
  };
  countPlus = () => {
    this.setState({count: this.state.count + 1})
  }
  countMinus = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return ( <div>
            <button onClick={ this.countPlus }>+</button>
            <span>{ this.state.count }</span>
            <button onClick={ this.countMinus }>-</button>
          </div> )
  }
}
