import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <nav>
          <div className='nav-link-wrapper'>
            <NavLink to='/' className='nav-link-active'>
              Home
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink to='/about' className='nav-link-active'>
              About
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink to='/contact' className='nav-link-active'>
              Contact
            </NavLink>
          </div>
          <div className='nav-link-wrapper'>
            <NavLink to='/resume' className='nav-link-active'>
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
