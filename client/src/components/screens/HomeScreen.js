import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

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

let immageArray = [
  "l1.jpeg",
  "s1.jpeg",
  "l2.jpeg",
  "s2.jpeg",
  "l5.jpeg",
  "s10.jpeg",
  "l3.jpeg",
  "s3.jpeg",
  "l4.jpeg",
  "s4.jpeg",
  "s11.jpeg",
  "s12.jpeg",
  "s6.jpeg",
  "s5.jpeg",
  "s9.jpeg",
  "s7.jpeg",
  "s8.jpeg",
];

function HomeScreen(props) {
  return (
    <section className="home">
      <div className="home_content">
        <div className="images">
          {immageArray.map(function (img) {
            return (
              <Link to="#">
                <img src={`${img}`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HomeScreen;
