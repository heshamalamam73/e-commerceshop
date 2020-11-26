import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "../../black.jpg";
import Carousel from "./carousel";
import Carousel2 from "./carousel2";
import Carousel3 from "./carousel3";
import img1 from "../../img/slid1.jpg";
import Topnav from "./Topnav.js";
import {
  FaShippingFast,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { RiInstallLine } from "react-icons/ri";
import { MdAssignmentReturn } from "react-icons/md";
import SignInScreen from "./SignInScreen";
import ContainerBox from "./Contaier";
function HomeScreen(props) {
  return (
    <div className="home">
      <Topnav />
      <Carousel2 />
      <Carousel />
      <ContainerBox />
      <Carousel3 />
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
      </Container>
      <div className="prefooter">
        <Row>
          <Col>
            <h2>AL TUO SERVIZIO</h2>
            <p>
              Scopri tutti i nostri servizi pensati per rendere i tuoi acquisti
              online sempre più facili e veloci. Scopri tutti i dettagli
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>
              {" "}
              <FaShoppingCart />
            </h1>
            <strong>Ritira</strong> in negozio
            <p>
              Paga o ordina online e ritira i tuoi acquisti nel punto vendita
              più vicino a te, senza spese di spedizione.
            </p>
          </Col>
          <Col>
            <h1>
              {" "}
              <FaShippingFast />
            </h1>
            <strong>SCEGLI</strong> LA TUA CONSEGNA Seleziona tra le nostre
            opzioni di consegna quella che preferisci.
          </Col>
          <Col>
            <h1>
              <RiInstallLine />
            </h1>
            <strong>INSTALLAZIONE</strong> E ALTRI SERVIZI Richiedi i nostri
            servizi di consegna e installazione a domicilio.
          </Col>
          <Col>
            <h1>
              <FaMoneyCheckAlt />
            </h1>
            <strong>FINANZIAMENTI </strong>
            Rimborsa i tuoi acquisti in comode rate mensili.
          </Col>
          <Col>
            <h1>
              <FaAssistiveListeningSystems />
            </h1>
            <strong>ASSISTENZA</strong> AGGIUNTIVA Proteggi i tuoi acquisti con
            Rilassati e Smile Service.
          </Col>
          <Col>
            <h1>
              <MdAssignmentReturn />
            </h1>
            <strong>RESO</strong> E DIRITTO DI RECESSO Rendi il tuo prodotto
            acquistato online in un punto vendita Unieuro.
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default HomeScreen;
