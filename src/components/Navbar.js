import React from "react";
import './../styles/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav_links">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/itinerary">
          <li>The Big Day</li>
        </Link>

        <Link to="/ourstory">
          <li>Our Story</li>
        </Link>

        <Link to="/registrylinks">
          <li>Registry</li>
        </Link>

        <Link to="/photoalbum">
          <li>Photos</li>
        </Link>

        <Link to="/weddingparty">
          <li>The Wedding Party</li>
        </Link>

        <Link to="/rsvp">
          <li>RSVP</li>
        </Link>

        <Link to="/guestbook">
          <li>Guestbook</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
