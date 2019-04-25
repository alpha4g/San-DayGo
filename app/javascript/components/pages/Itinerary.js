import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap'

class Itinerary extends React.Component {
  constructor(props){
    super(props)
    const{ match } = this.props
    this.state = {
      experiences: []
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
      fetch('http://localhost:3000/experiences.json')
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
// this.props.match.params.experience_id (this needs to happen in order to be propped over)
  componentDidUpdate = (prevProps) => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.experience_type != prevMatch.params.experience_type){
      this.setState({experiences: match.params.experience_type})
    }
  }

  render () {
      const { experiences } = this.state
      const daytime = experiences.filter((experience) => {
        return experience.experience_sub_type === "Daytime Activities"
      })
      const nighttime = experiences.filter((experience) => {
        return experience.experience_sub_type === "Nighttime Activities"
      })
      const restaurant = experiences.filter((experience) => {
        return experience.experience_sub_type === "Restaraunt $" || experience.experience_sub_type === "Restaurant $$" || experience.experience_sub_type === "Restaurant $$$"
      })
      console.log(this.state)
    return (
      <React.Fragment>
        <section><h1>Here Is Your {experiences.experience_name} Itinerary</h1></section><hr/>
        <section>
          <h1>Day Time Activities</h1>
            <ul>
              {daytime.map((experience, index) => {
                return(
                  <li key={index}>
                   Name: {experience.experience_name}<br/>
                   Description: {experience.experience_description}
                  </li>
                )
              })}
            </ul>
        </section>
        <section>
        <hr/>
          <h1>Suggested Restaurants</h1>
            <ul>
              {restaurant.map((experience, index) => {
                return(
                  <li key={index}>
                    Name: {experience.experience_name}<br/>
                    Description: {experience.experience_description}
                  </li>
                )
              })}
            </ul>
        </section>
        <section>
        <hr/>
          <h1>Nighttime Activities</h1>
          <ul>
            {nighttime.map((experience, index) => {
              return(
                <li key={index}>
                  Name: {experience.experience_name}<br/>
                  Description: {experience.experience_description}
                </li>
              )
            })}
          </ul>
        </section>
        <Link to="/">Back</Link>
      </React.Fragment>
    );
  }
}

export default Itinerary
