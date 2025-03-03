import React from 'react'
import "../style.css"

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <h2>Foodies</h2>
        </div>
        <nav>
            <a href="">about us</a>
            <a href="">contact</a>
            <a href="">branches</a>
        </nav>

        <div className="search">
            <input type="text" placeholder='search here...'/>
        </div>
      </div>
    </>
  )
}

export default Header