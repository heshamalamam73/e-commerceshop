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
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Let's Shopping</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {userInfo ? (
              <NavItem>
                <NavLink href="/profile"> {userInfo.name}</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/signin">Sign in</NavLink>
              </NavItem>
            )}
            {userInfo ? (
              <li className="">
                <NavItem>
                  <NavLink href="/products">Admin</NavLink>
                </NavItem>
              </li>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
