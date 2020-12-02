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
    <section className='body'>
      <div className="part1">
        <div className='text-left'>
          <h1>
            Let's Shopping !
          </h1>
          <p>
            Più di 10mila prodotti
                      </p>
          <Link to='/allproducts'> Acquistare ora </Link>

        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>

      </div>
      <div className="part2">
        <Carousel2 />
      </div>
      <div className="part3">
        <h1>prodotti Categories</h1>
        <div className="boxes">
          <div className="box1">
            <img src="https://images.pexels.com/photos/3921045/pexels-photo-3921045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="box2">
            <img src="https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="box3">
            <img src="https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="part4">
            <Carousel3 />
          </div>
        </div>



      </div>

    </section>
  );
}
export default HomeScreen;
