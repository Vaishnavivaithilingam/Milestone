import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Tourify</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/trips">Destinations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button onClick={handleLoginClick}>Login</button>
    </nav>
  );
}

export default Navbar;