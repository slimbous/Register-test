import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    const actveStyle = { color: "#C8472B" };
    return (
      <nav>
        <NavLink to="/" activeStyle={actveStyle} exact>
          Home
        </NavLink>
        |
        <NavLink to="/about" activeStyle={actveStyle}>
          About
        </NavLink>
        |
        <NavLink to="/signup" activeStyle={actveStyle}>
          About
        </NavLink>
      </nav>
    );
  }
}

export default Header;
