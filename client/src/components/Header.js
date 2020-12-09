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
        <Link to='/' >Let's Shopping</Link>
      </div>
      <ul className="navItems">
        <li><Link to='/signin'> <AiOutlineUser /></Link></li>
        <li><Link to='/liked'><AiFillHeart /></Link></li>
        <li><Link to='/cart'><AiOutlineShoppingCart /></Link></li>
        {/*<li>*/}
        {/*  <a href="#">           <BsJustify onClick={handleopen} />*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </section>
  );
}


export default Header;
