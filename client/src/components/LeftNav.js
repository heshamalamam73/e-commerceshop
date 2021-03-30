import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Topnav from "./screens/Topnav";
import { Link } from "react-router-dom";
function LeftNav(props) {
  const hideSideNav = () => {
    document.querySelector("#mySidenav").classList.remove("side_nav_active");
  };
  useEffect(() => {
    const links = document.querySelectorAll("a");
    console.log(links);
    links.forEach(function (link) {
      link.addEventListener("click", hideSideNav);
    });
  }, []);
  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn">
        &times;
      </a>
      <Link to="/">Home</Link>
      <Link to="/allproducts">All peoducts</Link>
      <a href="#services">Services</a>
      <a href="#">Clients</a>
      <a href="#cantact">Contact</a>
    </div>
  );
}

export default LeftNav;
