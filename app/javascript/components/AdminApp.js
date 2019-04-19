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



class AdminApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Router>
         <div>
          <Switch>
             <Route exact path="/admin" component={ExperienceAdmins} />
             <Route path="/NewExperience" component={NewExperience} />
             <Route component={NoMatch}/>
           </Switch>

         </div>
       </Router>
      </React.Fragment>
    );
  }
}

export default AdminApp
