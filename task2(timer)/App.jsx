import React, { Component } from "react";
import './App.css';

class App extends Component{
  state = {
    count: '',
    startTimer: false,
  };
  setTimer = () => {
    if (this.state.startTimer){
      clearInterval(this.timer)
    } else {
      this.timer = setInterval(() => {
        this.setState({count: this.state.count + 1 })
      }, 1000);
    }
    this.setState({startTimer: !this.state.startTimer});
  }
  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({startTimer: false, count: 0});
  }
  componentDidMount() {
    this.setState({count: localStorage.getItem('count') ? +localStorage.getItem('count') : 0})
  }
  componentDidUpdate() {
    localStorage.setItem('count', this.state.count)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="app">
        <h2>React Timer</h2>
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={this.setTimer}>{this.state.startTimer ? 'Stop' : 'Start'}</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )
  }
}


export default App;
