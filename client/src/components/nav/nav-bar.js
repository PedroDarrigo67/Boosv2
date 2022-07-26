// src/components/nav-bar.js

import React from "react";
import MainNav from "./main-nav";
import AuthNav from "../autentica/auth-nav";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";

const NavBarBarra = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">          
         <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
            text-color="white"
          ><BsHouseFill/> InmoProf</NavLink>
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
