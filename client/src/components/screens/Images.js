import { Container, Col, Row } from 'react-bootstrap'


function Images(props) {
  return (
    <Container className="blackfriday">
      <Row className='row'>
        <Col xs={12}>

          <img
            src="https://images.pexels.com/photos/5632363/pexels-photo-5632363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            style={{ width: "100%", height: "200px" }}
          />{" "}
        </Col>
        <Col xs={12}>
          <h3>Change Black Friday</h3>
          <p>Offete valide fino al 30 decembre</p>
        </Col>
        <Col xs={12}>
          <button className="btn mr-5 button">Sfoglia il volantino</button>
        </Col>
      </Row>
    </Container >
  )
}
export default Images;