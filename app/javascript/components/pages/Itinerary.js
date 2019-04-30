import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap'
import HeaderPlaceholder from '../../images/Header1.jpg'
import ExperiencePlaceholder from '../../images/Experience-Placeholder.jpg'

import { Container, Row, Col } from 'react-bootstrap'


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
      window.scrollTo(0,0)
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

  randomArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
      }
    return array;
  }

  render () {
      const{ match } = this.props
      const { experiences } = this.state
      const exp = experiences.filter((experience) => {
        return experience.experience_type === match.params.experience_type
      })
      const daytime = experiences.filter((experience) => {
        return experience.experience_sub_type === "Day Activity"
      })
      const daytimeRandom = this.randomArray(daytime)


      const night = experiences.filter((experience) => {
        return experience.experience_sub_type === "Night Activity"
      })
      const nightRandom = this.randomArray(night)


      const restaurantOne = experiences.filter((experience) => {
        return experience.experience_sub_type === "$"
      })
      const restRandomOne = this.randomArray(restaurantOne)


      const restaurantTwo = experiences.filter((experience) => {
        return experience.experience_sub_type === "$$"
      })
      const restRandomTwo = this.randomArray(restaurantTwo)


      const restaurantThree = experiences.filter((experience) => {
        return experience.experience_sub_type === "$$$"
      })
      const restRandomThree = this.randomArray(restaurantThree)

    return (
      <React.Fragment>
        <section>
            <img src={HeaderPlaceholder} className="responsive" alt='San Diego with view of Coronado Bridge' />
        </section>
        <div className="section-background-lightblue">
            <section className="section-padding">
              <h2 className="white-h2-title">Daytime  {match.params.experience_type} Experiences</h2>
              <br />
                  {daytimeRandom.slice(0,2).map((experience, index) => {
                    return(
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <img className="itinerary-image" src="https://s3.us-east-2.amazonaws.com/sandaygo-capstone/Vertial-Hold-Old-Town.jpg"/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <div className="white-font" key={index}>
                                    <div className="experience-label-font-white">{experience.experience_name}</div>
                                    <p className="white-font">{experience.experience_description}</p>
                                    <p className="white-font">Hours: {experience.hours}<br/>
                                    Phone: {experience.phone_number}<br/>
                                    Address: {experience.address}<br/>
                                    Website: {experience.website}</p>
                                    <button className="itinerary-button-day">View More</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                          </div>
                        </div>
                    )
                  })}
            </section>
        </div>
        <div className="section-background-orange">
            <section className="section-padding">
              <h2 className="white-h2-title">Recomended Restaurants</h2>
              <br />
                  {restRandomOne.slice(0,1).map((experience, index) => {
                    return(
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <img className="itinerary-image" src="https://s3.us-east-2.amazonaws.com/sandaygo-capstone/Mo'sBar.jpg"/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <div className="white-font" key={index}>
                                    <div className="experience-label-font-white">{experience.experience_name}</div>
                                    <p className="white-font">{experience.experience_description}</p>
                                    <p className="white-font">Price: $$<br/>
                                    Hours: {experience.hours}<br/>
                                    Phone: {experience.phone_number}<br/>
                                    Address: {experience.address}<br/>
                                    Website: {experience.website}</p>
                                    <button className="itinerary-button-restaurant">View More</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                          </div>
                        </div>
                    )
                  })}
                  {restRandomTwo.slice(0,1).map((experience, index) => {
                    return(
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <img className="itinerary-image" src="https://s3.us-east-2.amazonaws.com/sandaygo-capstone/Mo'sBar.jpg"/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <div className="white-font" key={index}>
                                    <div className="experience-label-font-white">{experience.experience_name}</div>
                                    <p className="white-font">{experience.experience_description}</p>
                                    <p className="white-font">Price: $$<br/>
                                    Hours: {experience.hours}<br/>
                                    Phone: {experience.phone_number}<br/>
                                    Address: {experience.address}<br/>
                                    Website: {experience.website}</p>
                                    <button className="itinerary-button-restaurant">View More</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                          </div>
                        </div>
                    )
                  })}
                  {restRandomThree.slice(0,1).map((experience, index) => {
                    return(
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <img className="itinerary-image" src="https://s3.us-east-2.amazonaws.com/sandaygo-capstone/Mo'sBar.jpg"/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-6 col-md-6  col-sm-12">
                                <div className="white-font" key={index}>
                                    <div className="experience-label-font-white">{experience.experience_name}</div>
                                    <p className="white-font">{experience.experience_description}</p>
                                    <p className="white-font">Price: $$$<br/>
                                    Hours: {experience.hours}<br/>
                                    Phone: {experience.phone_number}<br/>
                                    Address: {experience.address}<br/>
                                    Website: {experience.website}</p>
                                    <button className="itinerary-button-restaurant">View More</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                          </div>
                        </div>
                    )
                  })}
            </section>
        </div>
        <div className="section-background-darkblue">
            <section className="section-padding">
              <h2 className="white-h2-title">Nighttime  {match.params.experience_type} Experiences</h2>
              <br />
                {nightRandom.slice(0,2).map((experience, index) => {
                  return(
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6  col-sm-12">
                              <img className="itinerary-image" src="https://s3.us-east-2.amazonaws.com/sandaygo-capstone/Mo'sBar.jpg"/>
                              <br/>
                              <br/>
                              <br/>
                          </div>
                          <div className="col-lg-6 col-md-6  col-sm-12">
                              <div className="white-font" key={index}>
                                  <div className="experience-label-font-white">{experience.experience_name}</div>
                                  <p className="white-font">{experience.experience_description}</p>
                                  <p className="white-font">Hours: {experience.hours}<br/>
                                  Phone: {experience.phone_number}<br/>
                                  Address: {experience.address}<br/>
                                  Website: {experience.website}</p>
                                  <button className="itinerary-button-day">View More</button>
                                  <br/>
                                  <br/>
                                  <br/>
                              </div>
                          </div>
                        </div>
                      </div>
                  )
                })}
            </section>
            <div className="light-blue-background-small">
            <section className="footer-padding">
            <Link to="/">Start Over</Link>
            </section>
            </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Itinerary
