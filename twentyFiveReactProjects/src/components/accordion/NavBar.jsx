import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <NavLink to={'/'}>
          <li>Home</li>
        </NavLink>
        <NavLink to={'/rappers'}>
          <li>Rappers</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
