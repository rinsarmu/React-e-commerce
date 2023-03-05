import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/App/user';

const App = () => {
  return(
    <div className="ui conatiner comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={logo} alt="logo" />
        </a>

        <div className="content">
          <a href="/" className="author">
            Sma
          </a>
        </div>
        <div className="metadata">
          <span className="date">Today at 06:00</span>
        </div>
        <div className="text">Nice blogs post</div>

      </div>
    </div>

  )

}

export default App;
