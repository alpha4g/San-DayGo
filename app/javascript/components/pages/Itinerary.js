import React from "react"
import PropTypes from "prop-types"

class Itinerary extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      experience_name: "",
      experience_type: "",
      experience_description: "",
    }
  }
  render () {
      const { experience_name, experience_type, experience_description } = this.state
    return (
      <React.Fragment>
        <section><h1>Here Is Your {experience_type} Itinerary</h1></section>
        <section>
          <h1>Day Time Activities</h1>
            <ul>
              <li>
               {experience_name}<br/>{experience_description}
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
      </React.Fragment>
    );
  }
}

export default Itinerary
