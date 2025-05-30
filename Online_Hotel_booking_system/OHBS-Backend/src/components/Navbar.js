import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/book-room">Book Room</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
