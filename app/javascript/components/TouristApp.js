import React from "react"
import PropTypes from "prop-types"
import Itinerary from './pages/Itinerary'
import Tourist from './pages/Tourist'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'



class TouristApp extends React.Component {
  render () {
    return (
    <Router>
        <React.Fragment>
              <Route exact path="/itinerary" component={Itinerary} />
              <Route exact path="/" component={Tourist} />
        </React.Fragment>
    </Router>
    );
  }
}

export default TouristApp
