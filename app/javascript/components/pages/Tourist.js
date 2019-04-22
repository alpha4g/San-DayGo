import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

class Tourist extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h1>Welcome To San Day-Go!</h1>
            <section>
              <h1>About Us!</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </section>
            <section>
              <h1>How it Works</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </section>
            <section>
              <h1>Choose Your Adventure!</h1>
                  <Container>
                    <Row>
                      <Col>1 of 5</Col>
                      <Col>Adventerous</Col>
                      <Col>Foodie</Col>
                      <Col>Beach Bum</Col>
                      <Col>5 of 5</Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col>1 of 5</Col>
                      <Col>Family</Col>
                      <Col>Sporty</Col>
                      <Col>Cultural</Col>
                      <Col>5 of 5</Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col>1 of 5</Col>
                      <Col>Fashonista</Col>
                      <Col>LGBT</Col>
                      <Col>Outdoors</Col>
                      <Col>5 of 5</Col>
                    </Row>
                  </Container>
            </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Tourist
