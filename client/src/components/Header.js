import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiFillHeart } from 'react-icons/ai'
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


  // const [isOpen, setIsOpen] = useState(false);
  // const active = props.cartItems.length > 0 ? true : false;
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  const { signout, isAuhenticated, user } = props;
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  const handleShowNav = () => {
    document.getElementById('navitems').style.display = "block"
  }
  return (
    <section className='header'>
      <div className="navTitle">
        <span><Link to='/'>Let's Shopping</Link></span>
      </div>
      <ul className="navItems">
        <li><Link to='/signin'> <AiOutlineUser /></Link></li>
        <li><Link to='/liked'><AiFillHeart /></Link></li>

        <li><Link to='/cart'><AiOutlineShoppingCart /></Link></li>


        <BsJustify style={{ margin: "5px ", fontSize: "50px", padding: '5px', cursor: 'pointer', color: '#eee', }} onClick={handleopen} />
      </ul>
    </section>
  );
}

export default Header;
