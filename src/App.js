import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AGNavBar from './components/AGNavBar.js'
import AGSky from './components/AGSky.js'
import AGJumbotron from './components/AGJumbotron.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AGSky></AGSky>
        <AGNavBar></AGNavBar>
        <AGJumbotron></AGJumbotron>
      </div>
    );
  }
}

export default App;