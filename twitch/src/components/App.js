import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import NotMatch from './error.js/NotMatch'
import Header from './Header/Header'
const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />

        <Routes>
          <Route path='/' exact element ={<StreamList />}/>
          <Route path='/streams/edit'  element ={<StreamEdit />}/>

          <Route path='/streams/new'  element ={<StreamCreate />}/>
          <Route path='/streams/delete'  element ={<StreamDelete />}/>
          <Route path='/streams/show'  element ={<StreamShow />}/>
          <Route path='*'  element ={<NotMatch />}/>


        </Routes>
      </Router>
      
    </div>
  )
}

export default App
