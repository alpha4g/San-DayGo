import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import MainImage from '../../images/SanDayGo-Header-Background.jpg';
import GenericImage from '../../images/Experience-Placeholder-Image.jpg'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'
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
            <img src={MainImage} alt='San Diego Skyline' />
        </div>
            <section className="section-padding">
              <p className="center">
              <span className="welcome-text-blue">WELCOME TO</span><span>&nbsp;</span><span className="welcome-text-orange">SAN</span><span span className="welcome-text-blue">DAY</span><span span className="welcome-text-orange">GO</span><span span className="welcome-text-blue">!</span>
              </p>
                <p>Located on the coast of the Pacific Ocean in Southern California, San Diego is widely known as “America’s Finest City.” Famous for its 70 miles and of white-sand beaches and amazing weather, the city offers an abundance of fun attractions for visitors of all ages.</p>
                <p>Boasting a citywide population of more than 1.3 million and more than 3 million residents countywide, San Diego is California’s second largest city and the United States’ eighth largest. San Diego County is made up of 18 incorporate cities and towns along with other charismatic neighborhoods and communities, such as Carlsbad, Coronado, Del Mar, Downtown San Diego’s Gaslamp Quarter, Point Loma, Chula Vista, Old Town, La Jolla, and North Park.</p>
                <p>Explore all the world-class attractions San Diego has to offer, including the world-famous Balboa Park, San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California, as well as the abundance of extraordinary culinary experiences at Celebrity Chef-helmed restaurants located throughout the county.</p>
                <br />
                <h3 className="center">Enjoy your Day-on-the-Go right here in San Diego!</h3>
            </section>
            <div className="create-section-background">
                <section className="section-padding">
                <img className="homepage-bridge-photo" src={HeaderPlaceholder} alt='San Diego Skyline and Coronado Bridge' />
                <br />
                <br />
                <br />
                  <h2 className="white-h2-title">CREATE A CUSTOM ITINERARY!</h2>
                  <br />
                    <p className="white-p-font">Our handy SanDayGo Generator will magically create a fabulous full day in San Diego. Simply click on the "Experience Type" you would like to explore and you will be provided a custom itinerary with 2 options of daytime activities, 2 options of nighttime activities and 3 restaurant suggestions in three different price categories: cheap eats, mod bites and fancy feasts.
                    </p>
                </section>
            </div>
            <section className="section-padding">
              <h2>CHOOSE YOUR OWN ADVENTURE!</h2>
              <br />
                  <Container>
                    <Row>
                      <Col className="experience-col">
                          <Card style={{ width: '20rem' }}>
                            <Card.Img variant='top' src={GenericImage} />
                            <Card.Body>
                              <Card.Title className="card-title">Adventurous</Card.Title>
                              <Card.Text className="center">
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>
                              <Button className="button" variant="primary">Make This Itinery</Button>
                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card style={{ width: '20rem', height: 'auto'  }}>
                            <Card.Img variant='top' src={GenericImage} />
                            <Card.Body>
                              <Card.Title className="center">Foodie</Card.Title>
                              <Card.Text>
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>
                              <Button variant="primary">Make This Itinery</Button>
                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col className="experience-col">
                          <Card style={{ width: '20rem', height: 'auto'  }}>
                            <Card.Img variant='top' src={GenericImage} />
                            <Card.Body>
                              <Card.Title className="center">Beach Bum</Card.Title>
                              <Card.Text>
                                Experience the adreniline rush with a day filled with high-energy experiences.
                              </Card.Text>
                              <Button variant="primary">Make This Itinery</Button>
                              <br />
                            </Card.Body>
                          </Card>
                      </Col>
                    </Row>
                  </Container>
                  <br />
                  <Container>
                    <Row>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">Family</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">Sporty</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">Cultural</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                  </Container>
                  <br />
                  <Container>
                    <Row>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">Fashionista</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">LGBT</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="experience-col">
                        <Card style={{ width: '20rem', height: 'auto'  }}>
                          <Card.Img variant='top' src={GenericImage} />
                          <Card.Body>
                            <Card.Title className="center">Outdoors</Card.Title>
                            <Card.Text>
                              Experience the adreniline rush with a day filled with high-energy experiences.
                            </Card.Text>
                            <Button variant="primary">Create Itinery</Button>
                            <br />
                          </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                  </Container>
            </section><hr/>
            <section className="section-padding">
              <h2>ABOUT THE GREATER SAN DIEGO TOURIST BUREAU</h2>
                <br />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Tourist
