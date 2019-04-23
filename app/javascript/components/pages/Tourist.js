import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import MainImage from '../../images/SanDayGo-Header-Background.jpg';
import GenericImage from '../../images/600Holder.jpg'
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
            <section>
              <h2>Welcome To San-DayGo!</h2>
                <p>Located on the coast of the Pacific Ocean in Southern California, San Diego is widely known as “America’s Finest City.” Famous for its 70 miles and of white-sand beaches and amazing weather, the city offers an abundance of fun attractions for visitors of all ages.</p>
                <p>Boasting a citywide population of more than 1.3 million and more than 3 million residents countywide, San Diego is California’s second largest city and the United States’ eighth largest. San Diego County is made up of 18 incorporate cities and towns along with other charismatic neighborhoods and communities, such as Carlsbad, Coronado, Del Mar, Downtown San Diego’s Gaslamp Quarter, Point Loma, Chula Vista, Old Town, La Jolla, and North Park.</p>
                <p>Explore all the world-class attractions San Diego has to offer, including the world-famous Balboa Park, San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California, as well as the abundance of extraordinary culinary experiences at Celebrity Chef-helmed restaurants located throughout the county.</p>
                <p>Enjoy your Day-on-the-Go right here in San Diego!</p>
            </section>
            <hr/>
            <section>
              <h2>How it Works</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </section>
            <hr/>
            <section>
              <h2>Choose Your Adventure!</h2>

              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>
              <Card style={{ width: '20rem', height: 'auto'  }}>
                <Card.Img variant='top' src={GenericImage} />
                <Card.Body>
                  <br />
                  <Card.Title>ADVENTUROUS</Card.Title>
                  <Card.Text>
                    Experience the adreniline rush with a day filled with high-energy experiences.
                  </Card.Text>
                  <Button variant="primary">Make This Itinery</Button>
                  <br />
                  <br />
                </Card.Body>
              </Card>

                  <Container>
                    <Row>
                      <Col>Adventerous</Col>
                      <Col>Foodie</Col>
                      <Col>Beach Bum</Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                    <Col>Family</Col>
                      <Col>Sporty</Col>
                      <Col>Cultural</Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col>Fashonista</Col>
                      <Col>LGBT</Col>
                      <Col>Outdoors</Col>
                    </Row>
                  </Container>
            </section><hr/>
            <section>
              <h2>About The Greater San Diego Tourist Bureau</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Tourist
