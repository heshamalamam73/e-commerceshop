import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { BsJustify, BsListUl } from 'react-icons/bs'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { Container, Form, Row, FormControl, Button, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'
import Topnav from "./screens/Topnav";

function Header(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true)

  const handleopen = () => {
    setShow(!show)
    const nav = document.getElementById("mySidenav")
    show ? nav.style.width = "300px" : nav.style.width = "0px"

  }


  const [isOpen, setIsOpen] = useState(false);
  const active = props.cartItems.length > 0 ? true : false;
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { signout, isAuhenticated, user } = props;
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  const handleShowNav = () => {
    document.getElementById('navitems').style.display = "block"
  }
  return (
    <div>
      <Navbar expand="md" color="dark" dark fixed='top' style={{ zIndex: '40000' }}>
        <BsJustify style={{ margin: "5px ", fontSize: "30px", padding: '5px', cursor: 'pointer', color: '#eee', backgroundColor: 'black' }} onClick={handleopen} />
        <NavbarBrand href="/">
          Let's Shopping
        </NavbarBrand>
        <NavbarToggler onClick={toggle} dark="true" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {isAuhenticated ? (
              <NavItem>
                <Link className="nav-link" onClick={handlelogout}>
                  Log Out
                </Link>
              </NavItem>
            ) : (
                <NavItem>
                  <Link className="nav-link" to="/signin">
                    Sign in
                </Link>
                </NavItem>
              )}
            {user.isAdmin ? (
              <NavItem>
                <Link className="nav-link" to="/products">
                  Admin
                </Link>
              </NavItem>
            ) : null}
            <NavItem>
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className={
                  active
                    ? " active"
                    : ""
                } />
                <sup>{props.cartItems.length}</sup>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
