import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../../img/slid21.jpg'


function ContainerBox(props) {


  return (
    <Container className="content-container">
      <Row>
        <Col>
          <img src="https://images.pexels.com/photos/1983035/pexels-photo-1983035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ maxWidth: "100%" }} />
        </Col>
        <Col>
          <img src="https://images.pexels.com/photos/4225229/pexels-photo-4225229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://images.pexels.com/photos/4161786/pexels-photo-4161786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ maxWidth: "100%" }} />
        </Col>
        <Col>
          <img src="https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ maxWidth: "100%" }} />
        </Col>
      </Row>

    </Container>
  )
}

export default ContainerBox;