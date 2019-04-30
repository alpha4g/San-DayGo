import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

import MainImage from '../../images/Landing-Page-Header.png';
import GenericImage from '../../images/Experience-Placeholder.jpg'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'
import AboutSanDiego from '../../images/San-Diego-About.jpg'
import Adrenaline from '../../images/Adrenaline.jpg'
import Beaches from '../../images/Beaches.jpg'
import Cultural from '../../images/Cultural.jpg'
import Family from '../../images/Family.jpg'
import Fashionista from '../../images/Fashionista.jpg'
import Foodie from '../../images/Foodie.jpg'
import LGBT from '../../images/LGBT.jpg'
import Outdoors from '../../images/Outdoors.jpg'
import Sporty from '../../images/Sporty.jpg'
import {Picture} from 'react-responsive-picture';
import TourismLogo from '../../images/SDTourism-Logo.jpg'
import SDPlan from '../../images/San-Daygo-Plan.jpg'


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
            <Picture src={MainImage} className="responsive" alt='San Diego Skyline' />
        </div>
            <section className="section-padding">
              <p className="center">
              <Picture src={AboutSanDiego} className="responsive" alt='San Diego Skyline' />
              <br />
              <br />
              <br />
              <span className="welcome-text-blue">WELCOME TO</span><span>&nbsp;</span><span className="welcome-text-orange">SAN</span><span className="welcome-text-blue">DAY</span><span className="welcome-text-orange">GO</span><span className="welcome-text-blue">!</span>

              </p>
                <p className="center">Located on the coast of the Pacific Ocean in Southern California, San Diego is widely known as “America’s Finest City.” Famous for its 70 miles and of white-sand beaches and amazing weather, the city offers an abundance of fun attractions for visitors of all ages.</p>
                <p className="center">Boasting a citywide population of more than 1.3 million and more than 3 million residents countywide, San Diego is California’s second largest city and the United States’ eighth largest. San Diego County is made up of 18 incorporate cities and towns along with other charismatic neighborhoods and communities, such as Carlsbad, Coronado, Del Mar, Downtown San Diego’s Gaslamp Quarter, Point Loma, Chula Vista, Old Town, La Jolla, and North Park.</p>
                <p className="center">Explore all the world-class attractions San Diego has to offer, including the world-famous Balboa Park, San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California, as well as the abundance of extraordinary culinary experiences at Celebrity Chef-helmed restaurants located throughout the county.</p>
                <br />
                <h3 className="center">ENJOY YOUR DAY ON-THE-GO RIGHT HERE IN SAN DIEGO</h3>
            </section>
            <div className="section-background-darkblue">
                <section className="section-padding">
                <Picture src={SDPlan} className="responsive" alt='Old Town Trolley and Cassa Del Prado' />
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
                              <Link to="/itinerary/Adrenaline"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card>
                            <Card.Img variant='top' src={Beaches} />
                            <Card.Body>
                              <Card.Title className="center">Beach</Card.Title>
                              <Card.Text className="center">
                                Soak in the warm San Diego sun while running your toes through white-sand beaches.
                              </Card.Text>
                              <Link to="/itinerary/Beach"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card>
                            <Card.Img variant='top' src={Outdoors} />
                            <Card.Body>
                              <Card.Title className="center">Outdoor</Card.Title>
                              <Card.Text className="center">
                                Discover the beauty of nature while journeying through endless hidden trails.
                              </Card.Text>
                              <Link to="/itinerary/Outdoor"><Button className="button" variant="primary">Create Itinerary</Button></Link>
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
                              Spend the day with the kids experiencing some of the greatest family advetures available.
                            </Card.Text>
                              <Link to="/itinerary/Family"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Sporty} />
                          <Card.Body>
                            <Card.Title className="center">Sports</Card.Title>
                            <Card.Text className="center">
                              Break a sweat and feel the burn while experienceing a day of physical activity and adventure.
                            </Card.Text>
                              <Link to="/itinerary/Sport"><Button className="button" variant="primary">Create Itinerary</Button></Link>
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
                              Discover the "history of the ages" from local San Dieg surroundings to far-away lands.
                            </Card.Text>
                              <Link to="/itinerary/Cultural"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Fashionista} />
                          <Card.Body>
                            <Card.Title className="center">Fashion</Card.Title>
                            <Card.Text className="center">
                              Pamper your inner Diva and do the things you do best from a spa day to shopping 'til you drop.
                            </Card.Text>
                              <Link to="/itinerary/Fashion"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={LGBT} />
                          <Card.Body>
                            <Card.Title className="center">LGBT</Card.Title>
                            <Card.Text className="center">
                              Explore and experience San Diego's diverse and expansive gay & lesbian community.
                            </Card.Text>
                              <Link to="/itinerary/LGBT"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card>
                          <Card.Img variant='top' src={Foodie} />
                          <Card.Body>
                            <Card.Title className="center">Food</Card.Title>
                            <Card.Text className="center">
                              Savor the incredible flavors of San Diego as you sample its wide-array of cultures and dishes.
                            </Card.Text>
                              <Link to="/itinerary/Food"><Button className="button" variant="primary">Create Itinerary</Button></Link>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                  </Container>
            </section>
            <div className="section-background-darkblue">
                <section className="section-padding">
                    <Picture src={TourismLogo} className="responsive" alt='Beach Image with San Diego Tourism Logo' />
                    <br />
                    <br />
                    <br />
                    <h2 className="white-h2-title">ABOUT THE SAN DIEGO BUREAU OF TOURISM</h2>
                    <br />
                    <p className="white-p-font">The San Diego Bureau of Tourism's mission is to drive visitor demand to economically benefit the San Diego region. Tourism is the second largest segment of San Diego's economy and employs approximately 194,000 people.</p>
                    <p className="white-p-font">The San Diego Bureau of Tourism is a private, non-profit, mutual benefit corporation composed of approximately 1,000 member organizations, businesses, local governments, and individuals seeking a better community through the visitor industry. The San Diego Bureau of Tourism members include tourism-related entities in such categories as lodging, dining, arts, attractions, shopping, and transportation, among others, as well as other companies indirectly involved in tourism.</p>
                    <br />
                    <h3 className="white-p-font">DISCOVER SAN DIEGO WITH THIS VIDEO FROM OUR FRIENDS AT EXPEDIA</h3>
                    <br />
                    <iframe width="100%" height="880px" src="https://www.youtube.com/embed/-KMZW_zwRfc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
