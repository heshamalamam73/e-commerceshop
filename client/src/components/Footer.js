import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { AiFillFacebook, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
function Footer(props) {


  return (
    <section className='footer'>
      <Row>
        <Col xs={12} xl={12}>
          <Row>
            <Col md={4} xs={12}>
              <span>ISCRIVITI ALLA NEWSLETTER</span>
              <input type="text" placeholder="Inserisci la tua email" />
              <button className='btn btn-primary ' >Iscrivi</button>

            </Col>
            <Col md={4} xs={12}>
              <span>TROVA UN PUNTO VENDITA</span>
              <input type="text" placeholder="Città , regione" />
              <button className='btn btn-primary'>Search</button>

            </Col>
            <Col md={4} xs={12}>

              <div className='social' >
                <h4>SEGUICI SUI SOCIAL</h4>
                <a href="https://twitter.com/hesham_alamam"><AiFillTwitterCircle />  </a>
                <a href="https://www.facebook.com/mahmoudhassan993"> <AiFillFacebook /></a>
                <a href="https://github.com/heshamalamam73"> <AiFillGithub /></a>
                <a href="https://stackoverflow.com/users/10776569/hesham-alamam"><FaStackOverflow /></a>
                <a href="https://www.linkedin.com/in/mahmoud-hassan-okily-3ab3a7b6/"><AiFillLinkedin /></a>
              </div>
            </Col>
          </Row>
          <p> © 2020 . All Rights Reserved. Mahmoud Okily </p>
        </Col>
      </Row>


    </section>
  )

}
export default Footer