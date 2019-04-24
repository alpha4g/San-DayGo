import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import MainImage from '../../images/Landing-Page-Header.png';
import GenericImage from '../../images/Experience-Placeholder-Image.jpg'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'
import AboutSanDiego from '../../images/San-Diego-About.jpg'

import Adrenaline from '../../images/Adrenaline.jpg'
import Beaches from '../../images/Beaches.jpg'
import Cultural from '../../images/Cultural.jpg'
import Family from '../../images/Family.jpg'
import Fashionista from '../../images/Fashionista.jpg'
import Foodie from '../../images/Foodie.jpg'

import HeaderPlaceholder from '../../images/Header-Placeholder.jpg';
import GenericImage from '../../images/Experience-Placeholder-Image.jpg';

import LGBT from '../../images/LGBT.jpg'
import Outdoors from '../../images/Outdoors.jpg'
import Sporty from '../../images/Sporty.jpg'
import { Picture } from 'react-responsive-picture';


import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'

class Tourist extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
        <div className='tourist-image'>
            <Picture src={MainImage} class="responsive" alt='San Diego Skyline' />
        </div>
            <section className="section-padding">
              <p className="center">

              <span className="welcome-text-blue">WELCOME TO</span><span>&nbsp;</span><span className="welcome-text-orange">SAN</span><span className="welcome-text-blue">DAY</span><span className="welcome-text-orange">GO</span><span className="welcome-text-blue">!</span>

              <span className="welcome-text-blue">WELCOME TO</span><span>&nbsp;&nbsp;&nbsp;</span><span className="welcome-text-orange">SAN</span><span className="welcome-text-blue">DAY</span><span className="welcome-text-orange">GO</span><span className="welcome-text-blue">!</span>

              </p>
                <p className="center">Located on the coast of the Pacific Ocean in Southern California, San Diego is widely known as “America’s Finest City.” Famous for its 70 miles and of white-sand beaches and amazing weather, the city offers an abundance of fun attractions for visitors of all ages.</p>
                <p className="center">Boasting a citywide population of more than 1.3 million and more than 3 million residents countywide, San Diego is California’s second largest city and the United States’ eighth largest. San Diego County is made up of 18 incorporate cities and towns along with other charismatic neighborhoods and communities, such as Carlsbad, Coronado, Del Mar, Downtown San Diego’s Gaslamp Quarter, Point Loma, Chula Vista, Old Town, La Jolla, and North Park.</p>
                <p className="center">Explore all the world-class attractions San Diego has to offer, including the world-famous Balboa Park, San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California, as well as the abundance of extraordinary culinary experiences at Celebrity Chef-helmed restaurants located throughout the county.</p>
                <br />
                <h3 className="center">ENJOY YOUR DAY ON-THE-GO RIGHT HERE IN SAN DIEGO</h3>
            </section>
            <div className="create-section-background">
                <section className="section-padding">
                <Picture src={AboutSanDiego} class="responsive" alt='San Diego Skyline and Coronado Bridge' />
                <br />
                <br />
                <br />
                  <h2 className="white-h2-title">CREATE YOUR OWN CUSTOM ITINERARY</h2>
                  <br />
                    <p className="white-p-font">Our handy SanDayGo Generator will magically create a fabulous full day in San Diego. Simply click on the type of experience you would like to explore and you will be provided a custom itinerary with 2 options of daytime activities, 2 options of nighttime activities and 3 restaurant suggestions in three different price categories: cheap eats, mod bites and fancy feasts.
                    </p>
                </section>
            </div>
            <section className="light-blue-background">
              <h2>CHOOSE YOUR ADVENTURE</h2>
              <br />
                  <Container className="flex-container">
                    <Row>
                      <Col className="experience-col">
                          <Card>
                            <Card.Img variant='top' src={Adrenaline} />
                            <Card.Body>
                              <Card.Title className="card-title">Adrenaline</Card.Title>

                              <Card.Text className="center">
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>
                              <Button className="button" variant="primary"><Link to="/itinerary/Adrenaline">Make This Itinerary</Link></Button>

                              <Card.Text className="card-text">
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>
                              <Button className="button" variant="primary">Create Itinery</Button>

                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card>
                            <Card.Img variant='top' src={Beaches} />
                            <Card.Body>
                              <Card.Title className="center">Beach Bum</Card.Title>
                              <Card.Text className="center">
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>


                              <Button className="button" variant="primary">Create Itinery</Button>

                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card>
                            <Card.Img variant='top' src={Outdoors} />
                            <Card.Body>
                              <Card.Title className="center">Outdoors</Card.Title>
                              <Card.Text className="center">
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>

                              <Button variant="primary"><Link to="/itinerary/BeachBum">Make This Itinerary</Link></Button>

                              <Button className="button" variant="primary">Create Itinery</Button>

                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Family} />
                          <Card.Body>
                            <Card.Title className="center">Family</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/Family">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Sporty} />
                          <Card.Body>
                            <Card.Title className="center">Sporty</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/Sporty">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Cultural} />
                          <Card.Body>
                            <Card.Title className="center">Cultural</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/Cultural">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Fashionista} />
                          <Card.Body>
                            <Card.Title className="center">Fashionista</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/Fashionista">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={LGBT} />
                          <Card.Body>
                            <Card.Title className="center">LGBTQ</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/LGBT">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Foodie} />
                          <Card.Body>
                            <Card.Title className="center">Foodie</Card.Title>
                            <Card.Text className="center">
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>

                            <Button variant="primary"><Link to="/itinerary/Outdoors">Make This Itinerary</Link></Button>

                            <Button className="button" variant="primary">Create Itinery</Button>

                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                  </Container>
            </section>
            <div className="create-section-background">
                <section className="section-padding">
                <Picture src={AboutSanDiego} class="responsive" alt='San Diego Skyline and Coronado Bridge' />
                <br />
                <br />
                <br />
                <h2 className="white-h2-title">ABOUT THE GREATER SAN DIEGO TOURIST BUREAU</h2>
                    <br />
                    <p className="white-p-font">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </section>
            </div>
            <div className="footer-background">
                <section className="footer-padding">
                    <p className="white-p-font">Powered by 4G Creatives &copy;2019 All Rights Reserved</p>
                </section>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tourist
