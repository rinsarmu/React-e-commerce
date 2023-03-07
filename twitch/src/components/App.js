import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const PageOne = () => {
  return (
    <div>
      PageOne
    </div>
  )
}



const PageTwo = () => {
  return (
    <div>
      pageTwo
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" exact  element={<PageOne />} />
        <Route path="/h"   element={<PageTwo/>} />

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
