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

  componentDidUpdate = (prevProps) => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.experience_type != prevMatch.params.experience_type){
      this.setState({experiences: match.params.experience_type})
    }
  }
//this.props.params.experience.id
  render () {
      const{ match } = this.props
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
      console.log(this.props);
    return (
      <React.Fragment>
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
