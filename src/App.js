import React from 'react';
import {user} from './assets/contact'

import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return(
    <div className="ui conatiner comments">
      <ApprovalCard >
        <CommentDetail 
          logo={user} 
          author="Natty" 
          comment='Nice blogs' 
          timeAgo="Today at 06:00"
        />
      </ApprovalCard >

      <ApprovalCard >
        <CommentDetail 
          logo={user}
          author="Natty" 
          comment='Awesome blogs' 
          timeAgo="Today at 04:00" 
        />
      </ApprovalCard >

      <ApprovalCard >
        <CommentDetail 
          logo={user}
          author="Natty" 
          comment='Thank you for sharing this ' 
          timeAgo="Yesterday at 02:00"
        />
      </ApprovalCard >

    </div>

  )

}

export default App;
