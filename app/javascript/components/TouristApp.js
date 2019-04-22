import React from "react"
import PropTypes from "prop-types"
import Itinerary from './pages/Itinerary'
import Tourist from './pages/Tourist'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class TouristApp extends React.Component {
  render () {
    return (
    <Router>
      <React.Fragment>
              <Switch>
                <Route exact path="/itinerary" component={Itinerary} />
              </Switch>
          <Tourist />
      </React.Fragment>
    </Router>
    );
  }
}

export default TouristApp
