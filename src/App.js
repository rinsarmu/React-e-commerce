import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/App/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <User logo ={logo} name="natty" time={new Date().getTime().toLocaleString()} comment=" awesome"/>

        <User logo ={logo} name="roba" time={new Date().getTime().toLocaleString()} comment="Great Blog"/>

        <User logo ={logo} name="sagni" time={new Date().getTime().toLocaleString()} comment="keep pushing "/>
        
      </div>
    );
  }
}

export default App;
