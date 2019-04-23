import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

class Itinerary extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      experience_name: "",
      experience_type: "",
      experience_description: "",
    }
  }

  getExperience = (experience) => {
      return fetch('http://localhost:3000/experiences', {
          body: JSON.stringify({experience}),
          headers: {
              'Content-Type' : 'application/json'
          },
          method: "GET"
      })
      .then((resp) => {
          let json = resp.json()
              return json
      })
  }

  componentDidMount = () => {
      fetch('/experiences')
      .then((response) => {
        return response.json()
      })
    .then((json) => {
      console.log(json[0].experience_name);
      this.setState({ json })
    })
    .catch((e)=>{
      console.log("Error", e)
    })
  }
//Look into Jbuilder rails.
  render () {
      const { experience_name, experience_type, experience_description } = this.state
      console.log(this.state);
    return (
      <React.Fragment>
        <section><h1>Here Is Your {experience_type} Itinerary</h1></section>
        <section>
          <h1>Day Time Activities</h1>
            <ul>
              <li>
               Name: {experience_name}<br/> Description: {experience_description}
              </li>
              <li>
                {experience_name}<br/>{experience_description}
              </li>
            </ul>
        </section>
        <section>
          <h1>Suggested Restaurants</h1>
            <ul>
              <li>
                {experience_name}<br/>{experience_description}
              </li>
              <li>
                {experience_name}<br/>{experience_description}
              </li>
              <li>
                {experience_name}<br/>{experience_description}
              </li>
            </ul>
        </section>
        <section>
          <h1>Nighttime Activities</h1>
            <ul>
              <li>
                {this.experience_name}<br/>{this.experience_description}
              </li>
              <li>
                {experience_name}<br/>{experience_description}
              </li>
            </ul>
        </section>

        <Link to="/">Back</Link>
      </React.Fragment>
    );
  }
}

export default Itinerary
