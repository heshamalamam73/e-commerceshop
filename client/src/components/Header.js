import { Link } from "react-router-dom";
import React, { useState } from "react";
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
import { Container, Form, Row, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'

function Header(props) {
  const dispatch = useDispatch();

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
  return (
    <Navbar bg="light" expand="lg" light sticky='bottom'  >
      <NavbarBrand href="/">Let's Shopping</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <input type="text" placeholder="Cerca Per Prodetto , Modello , Brand" className="nav-search" />

          {isAuhenticated ? (
            <NavItem>
              <Link className="nav-link" onClick={handlelogout}>
                Log Out
              </Link>
            </NavItem>
          ) : (
              <NavItem>
                <Link className="nav-link" to="/signin">
                  Accedi
              </Link>
              </NavItem>
            )}
          <NavItem>
            <NavLink href="/storys">Store</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cart">

              <span
                className={
                  active ? "active" : ""
                }
              >
                Carrello
                <FaShoppingCart />
                <sup>{props.cartItems.length}</sup>

              </span>
            </NavLink>
          </NavItem>

          {user.isAdmin ? (
            <NavItem>
              <Link className="nav-link" to="/products">
                Admin
              </Link>
            </NavItem>
          ) : null}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
export default Header;
