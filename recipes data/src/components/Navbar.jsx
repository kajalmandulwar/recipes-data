import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Foodies</a>
        <ul className="nav-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/branches">Branches</a></li>
        </ul>
        <button className="search-btn">Search Meal</button>
      </div>
    </nav>
  );
};

export default Navbar;