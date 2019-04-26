import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'
import ExperiencePlaceholder from '../../images/Experience-Placeholder.jpg'


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
      fetch(`http://localhost:3000/experiences.json?type=${this.props.match.params.experience_type}`)
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

  componentDidUpdate = (prevProps) => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.experience_type != prevMatch.params.experience_type){
      this.setState({experiences: match.params.experience_type})
    }
  }

  render () {
      const{ match } = this.props
      const { experiences } = this.state
      const exp = experiences.filter((experience) => {
        return experience.experience_type === match.params.experience_type
      })
      const daytime = experiences.filter((experience) => {
        // experience[Math.floor(Math.random()*experience.length)]
        return experience.experience_sub_type === "Day Activity"
      })
      const nighttime = experiences.filter((experience) => {
        return experience.experience_sub_type === "Night Activity"
      })
      const restaurant = experiences.filter((experience) => {
        return experience.experience_sub_type === "Restaraunt $" || experience.experience_sub_type === "Restaurant $$" || experience.experience_sub_type === "Restaurant $$$"
      })
    return (
      <React.Fragment>

        <section><h1>Here Is Your {match.params.experience_type} Itinerary</h1></section><hr/>
        <section>
          <h1>Day Time Activities</h1>
            <ul>
              {daytime.slice(1,4).map((experience, index) => {
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
              {restaurant.slice(1,5).map((experience, index) => {
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
            {nighttime.slice(1,4).map((experience, index) => {
              return(
                  <li key={index}>
                   Name: {experience.experience_name}<br/>
                   Description: {experience.experience_description}
                  </li>
              )
            })}
          </ul>

        <section>
            <img src={HeaderPlaceholder} className="responsive" alt='San Diego with view of Coronado Bridge' />
            <h1 className='intinerary-text-blue'>Enjoy Your {match.params.experience_type} Itinerary</h1>

        </section>
        <div className="section-background-orange">
            <section className="section-padding">
              <h2 className="white-h2-title">DAYTIME ACTIVITES</h2>
              <br />
                <ul>
                <img src={ExperiencePlaceholder} className="responsive" alt='Experience Image' />
                <br />
                <br />
                  {daytime.map((experience, index) => {
                    return(
                      <li className="white-font" key={index}>
                       Name: {experience.experience_name} Description: {experience.experience_description}
                      </li>
                    )
                  })}
                </ul>
            </section>
        </div>
        <div className="section-background-lightblue">
            <section className="section-padding">
              <h2 className="white-h2-title">SUGGESTED RESTAURANTS</h2>
              <br />
                <ul>
                <img src={ExperiencePlaceholder} className="responsive" alt='Experience Image' />
                <br />
                <br />
                  {restaurant.map((experience, index) => {
                    return(
                      <li className="white-font" key={index}>
                        Name: {experience.experience_name}  Description: {experience.experience_description}
                      </li>
                    )
                  })}
                </ul>
            </section>
        </div>
        <div className="section-background-darkblue">
            <section className="section-padding">
              <h2 className="white-h2-title">NIGHTTIME ACTIVITIES</h2>
              <br />
              <ul>
              <img src={ExperiencePlaceholder} className="responsive" alt='Experience Image' />
              <br />
              <br />
                {nighttime.map((experience, index) => {
                  return(
                    <li className="white-font" key={index}>
                      Name: {experience.experience_name}  Description: {experience.experience_description}
                    </li>
                  )
                })}
              </ul>
            </section>
        </div>
        <Link to="/">Back</Link>
      </React.Fragment>
    );
  }
}

export default Itinerary
