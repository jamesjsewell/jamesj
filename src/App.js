import React, { Component } from 'react';
import logo from './images/icons/jslogo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="row hero">
          <div className="two columns logo_wrapper">
  
              <img className="logo u-max-full-width" src={logo} alt="logo" />  
            
          </div>
          <div className="ten columns test"><h5 className="header_text">James Sewell - Front End Engineer</h5> <p className="subheader_text">Houston, TX</p></div>
        </header>
      </div>
    );
  }
}

export default App;
