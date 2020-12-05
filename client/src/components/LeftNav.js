import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Topnav from "./screens/Topnav";
import { Link } from 'react-router-dom'
function LeftNav(props) {



  return (
    <div id="mySidenav" class="sidenav">
      {/* <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a> */}
      <Link to='/' >Home</Link>
      <Link to='/allproducts'>All peoducts</Link>
      <a href="#services">Services</a>
      {/* <a href="#">Clients</a> */}
      <Link href="#cantact">Contact</Link>
    </div>
  );
}

export default LeftNav;
