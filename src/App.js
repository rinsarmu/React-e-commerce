import React, { Component } from 'react';
import logo from './logo.svg';
import {user} from './assets/contact'

import './App.css';
import User from './components/App/user';
import CommentDetail from './CommentDetail';

const App = () => {
  return(
    <div className="ui conatiner comments">
      <CommentDetail 
        logo ={user} 
        author="Natty" 
        comment = 'Nice blogs' 
        timeAgo = "Today at 06:00"
      />
      <CommentDetail 
        logo ={user}
        author="Natty" 
        comment = 'Awesome blogs' 
        timeAgo = "Today at 04:00" 
      />

      <CommentDetail 
        logo ={user}
        author="Natty" 
        comment = 'Thank you for sharing this ' 
        timeAgo = "Yesterday at 02:00"
      />

   

    </div>

  )

}

export default App;
