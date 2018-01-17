import React, { Component } from 'react';
import logo from './images/icons/logo.svg';
import './App.css';
import './skeleton.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code> src/App.js</code> and save to reload.
        </p>

        <div className="test_wrapper">
          <div className="test_content">
          test
          </div>

          <div className="test_content">
         
          </div>

        </div>
      </div>
    );
  }
}

export default App;
