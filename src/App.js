import React, { Component } from 'react';
import './App.css';
import AGNavBar from './components/AGNavBar.js'
import AGSky from './components/AGSky.js'
import AGJumbotron from './components/AGJumbotron.js'
import AGTeam from './components/AGTeam.js'
import AGMedia from './components/AGMedia.js'
import AGContact from './components/AGContact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AGSky></AGSky>
        <AGNavBar></AGNavBar>
        <AGJumbotron></AGJumbotron>
        <AGTeam></AGTeam>
        <AGMedia></AGMedia>
        <AGContact></AGContact>
      </div>
    );
  }
}

export default App;