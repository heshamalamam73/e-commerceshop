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
function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { userInfo } = props;
  return (
    <div>
      <Navbar expand="md" color="faded" light>
        <NavbarBrand href="/">Let's Shopping</NavbarBrand>
        <NavbarToggler onClick={toggle} dark />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {userInfo ? (
              <NavItem>
                <NavLink to="/profile"> {userInfo.name}</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <Link className="nav-link" to="/signin">
                  Sign in
                </Link>
              </NavItem>
            )}
            {userInfo ? (
              <NavItem>
                <Link className="nav-link" to="/products">
                  Admin
                </Link>
              </NavItem>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
