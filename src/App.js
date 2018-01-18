import React, { Component } from 'react';
import logo from './images/icons/jslogo.png'
import './skeleton.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="row container hero">
          <div className="two columns logo_wrapper">
  
              <img className="logo u-max-full-width" src={logo} alt="logo" />  
            
          </div>
          <div className="ten columns test"><h5 className="header_text">James Sewell - Front End Engineer</h5> <p className="header_text">Houston, TX</p></div>
        </header>
      </div>
    );
  }
}

export default App;
