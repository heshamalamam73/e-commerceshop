import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Topnav from "./screens/Topnav";
import { Link } from 'react-router-dom'
function LeftNav(props) {



  return (
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <Link to='/'>Home</Link>
      <Link to='/allproducts'>All peoducts</Link>
      <a href="#services">Services</a>
      {/* <a href="#">Clients</a> */}
      <a href="#cantact">Contact</a>
    </div>
  );
}

export default LeftNav;
