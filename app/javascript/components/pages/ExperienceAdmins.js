import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

class ExperienceAdmins extends React.Component {
      constructor(props){
       	    super(props)
       	    this.state = {
       	      experiences: []
       	    }
       	  }

    componentDidMount(){
	      fetch('/experiences')
	      .then((response) => {
	        return response.json()
	      })
      .then((json) => {
    this.setState({experiences: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
  }

  render () {
    return (
     <React.Fragment>
      <div>
        <h1>Admin Page of Experiences</h1>
        <table>
          <tbody>
            <tr>
              <th>Experience Name</th>
              <th>Experience Type</th>

            </tr>

            {this.state.experiences.map((experience, index) =>
              <tr key={index}>
                <td>{experience.experience_name}</td>
                <td>{experience.experience_type}</td>

              </tr>
	            )}
	          </tbody>
	        </table>
	      </div>

          <Link to="/NewExperience">Create New Experience</Link>
        </React.Fragment>

        );
    }
}

export default ExperienceAdmins
