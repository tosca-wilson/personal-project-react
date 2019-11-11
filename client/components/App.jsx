import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import CurrentMonth from './CurrentMonth'
// import UpcomingMonth from './UpcomingMonth'


const App = () => {
  return (
    <Router>
    <h1 className="heading">Planting Calendar</h1>
    <h5 className="searchbar">Search bar placeholder</h5>
    <div className="homeBlurb">
      <p>Welcome to this website for planting lots of things. Please select a month to see what plants are recommended for this season. 
      If you are looking for a specific plant, please click here.
      </p>
    </div>
    <div className="currentMonth">
      <Route exact path="/" component={CurrentMonth} />
    </div>
    
    </Router>
  )
}

export default App
