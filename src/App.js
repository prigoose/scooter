import React, { Component } from 'react';
import scooter from './components/icons/scooter.svg';
import './App.css';
import Card from './components/Card';
import Modal from './components/Modal'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={scooter} className="App-logo scooter" alt="logo" />
          <p className="title">The Micromobility Guide</p>
        </header>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Menu/>
        </div>
      </div>
    );
  }
}

export default App;
