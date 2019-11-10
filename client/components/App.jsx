import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import CurrentMonth from './CurrentMonth'
// import UpcomingMonth from './UpcomingMonth'


const App = () => {
  return (
    <Router>
    <h1 className="heading">Planting Calendar</h1>
    <h5 className="searchbar">Search bar</h5>
    <div className="homeBlurb">
      <p>Welcome to this website for planting lots of things.</p>
    </div>
    <div className="currentMonth">
      <Route exact path="./currentMonth" component={CurrentMonth} />
    </div>
    
    </Router>
  )
}

export default App
