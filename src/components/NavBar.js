import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    color: "black",
    borderBottom: "1px solid black",
  };

  let activeClassName = "underline";

  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <nav>
          <div className='nav-link-wrapper'>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink
              to='/about'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink
              to='/contact'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink
              to='/resume'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Resume
            </NavLink>
          </div>
        </nav>
      </div>
      <div className='right-side'>C Greenwood</div>
    </div>
  );
}
export default NavBar;
