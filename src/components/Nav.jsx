import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../assets/logo.png'


const Navigation = () => {
  return (
    <>
      <Navbar className='Navbar' expand="sm" >
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
            <Nav.Link href="/Map">MAP</Nav.Link>
            <Nav.Link href="/contact">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;