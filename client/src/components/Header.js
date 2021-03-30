import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHeart,
} from "react-icons/ai";
import { BsJustify, BsListUl } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  Container,
  Form,
  Row,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Topnav from "./screens/Topnav";

function Header(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleopen = () => {
    setShow(!show);
    const nav = document.getElementById("mySidenav");
    // show ? (nav.style.width = "300px") : (nav.style.width = "0px");
    nav.classList.toggle("side_nav_active");
  };

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
    document.getElementById("navitems").style.display = "block";
  };
  return (
    <section className="header">
      <div className="nav_content">
        <div className="nav_title">
          <Link to="/">Let's Shopping</Link>
        </div>
        <ul className="nav_items">
          <ul className="big_item">
            <li>
              <Link to="/signin">
                {" "}
                <AiOutlineUser />
              </Link>
            </li>
            <li>
              <Link to="/liked">
                <AiFillHeart />
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </li>
          </ul>

          <li>
            <a href="#" className="hamburger">
              <BsJustify onClick={handleopen} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
