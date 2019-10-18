import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../assets/logo.png'


const Navigation = () => {
  return (
    <>
      <Navbar bg="info" expand="sm" >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className='logo'
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="collapse navbar-collapse justify-content-end">
          <Nav>
            <Nav.Link href="/about">BATHROOM</Nav.Link>
            <NavDropdown title="Map" id="basic-nav-dropdown">
              <NavDropdown.Item href="/desserts">TBD</NavDropdown.Item>
              <NavDropdown.Item href="/pies">TBD</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;