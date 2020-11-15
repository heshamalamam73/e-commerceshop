import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { sign } from "jsonwebtoken";

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
    <div>
      <Navbar expand="md" color="faded" light>
        <NavbarBrand href="/">
          <i className="fas fa-shopping-bag mr-2"></i>
          Let's Shopping
        </NavbarBrand>
        <NavbarToggler onClick={toggle} dark="true" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">
                {/* <i className="fas fa-home "></i> */}
                Home
              </NavLink>
            </NavItem>
            {isAuhenticated ? (
              <NavItem>
                <Link className="nav-link" onClick={handlelogout}>
                  {/* <i className="fas fa-user"></i> */}
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
                  {/* <i className="fas fa-unlock-alt"></i> */}
                  Admin
                </Link>
              </NavItem>
            ) : null}
            <NavItem>
              <Link className="nav-link" to="/cart">
                <i
                  className={
                    active
                      ? "fas fa-shopping-cart active"
                      : "fas fa-shopping-cart"
                  }
                >
                  {" "}
                  <sup>{props.cartItems.length}</sup>
                </i>{" "}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
