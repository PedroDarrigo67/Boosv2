// src/components/nav-bar.js

import React from "react";
import MainNav from "./main-nav";
import AuthNav from "../autentica/auth-nav";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

const NavBarBarra = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">          
         <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
          >InmoProf</NavLink>
    </Navbar.Brand> 
        <Nav className="me-auto">
            <MainNav />          
        </Nav>
      <AuthNav />
    </Container>
    
  </Navbar>
  );
};

export default NavBarBarra;
