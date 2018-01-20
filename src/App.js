import React, { Component } from 'react';
import logo from './images/icons/jslogo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="hero u-max-full-width">
          <div className="logo_wrapper">
  
              <img className="logo u-max-full-width" src={logo} alt="logo" />  
            
          </div>
          <div className="header_text"><h5 className="tagline">FRONT END ENGINEER</h5> <p className="subheader_text">Houston, TX</p></div>
        </header>
      </div>
    );
  }
}

export default App;
