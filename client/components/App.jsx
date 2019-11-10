import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <h1 className="heading">Planting Calendar</h1>
    <h5 className="searchbar">Search bar</h5>
    <div className="homeBlurb">
      <p>Welcome to this website for planting lots of things.</p>
    </div>
    </Router>
  )
}

export default App
