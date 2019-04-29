import React from "react"
import PropTypes from "prop-types"
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import ExperienceAdmins from './pages/ExperienceAdmins'
import NewExperience from './pages/NewExperience'
import NoMatch from './pages/NoMatch'
import Tourist from './pages/Tourist'
import Itinerary from './pages/Itinerary'


class AdminApp extends React.Component {
  render () {
    return (
    <Router>
      <React.Fragment>
        <Switch>
           <Route exact path="/admin" component={ExperienceAdmins} />
           <Route path="/NewExperience" component={NewExperience} />
           <Route exact path="/" component={Tourist} />
           <Route path="/itinerary/:experience_type" component={Itinerary} />
           <Route component={NoMatch}/>
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default AdminApp
