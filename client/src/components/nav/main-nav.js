import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto text-black-50">
    <NavLink
      to="/posts"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Post
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink>
  </div>
);

export default MainNav;
