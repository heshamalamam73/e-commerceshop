import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "../../black.jpg";
import Carousel from "./carousel";
import Carousel2 from "./carousel2";
import Carousel3 from "./carousel3";
import img1 from "../../img/slid1.jpg";
import Topnav from "./Topnav.js";
import { motion } from "framer-motion";
import {backVariants , imageVariants, frameVariants, thumbnailVariants , transition} from "./setting";
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
      <section className='body'>
      <div className="part1">
        <div className='text-left'>
          <h1>
            Let's Shopping !
          </h1>
          <p>
            Più di 10mila prodotti
                      </p>
          <Link to='/online'> Acquistare ora </Link>

        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>

      </div>
      <div className="part2">
        <Carousel2 />
      </div>
      <div className="part3">
        <h1>prodotti Categories</h1>
        <Row className="boxes">
          <Col xs={12}  xl={4} className="box1">
            <img src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <p>Prova un caricamento ultra rapido con un'unità SSD ad altissima velocità, un coinvolgimento ancora maggiore grazie al supporto per il feedback aptico, ai grilletti adattivi e all'audio 3D e scopri una nuova generazione di incredibili giochi PlayStation®. </p>

          </Col>
          <Col xs={12}  xl={4} className="box1">
            <img src="https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <p>For over 60 years, JBL has engineered the precise, impressive sound found in big venues around the world. These headphones reproduce that same JBL sound, punching out bass that’s both deep and powerful.</p>
          </Col>
        <Col xs={12}  xl={4} className="box1">
            <img src="https://images.pexels.com/photos/3945671/pexels-photo-3945671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <p>allcaca RC Mini Drone con Telecamera 4K HD Doppia, RC Quadcopter Drone Pieghevole WiFi FPV Drone, Un Pulsante di Decollo / Atterraggio, Modalità Senza Testa 3D Flip, per Bambini e Principianti Regalo</p>

          </Col>

        </Row>

        <div className="part4">
          <Carousel3 />
        </div>

      </div>


      </section>

  );
}
export default HomeScreen;
