// import { useState } from "react"

import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="navbar">

      {/* ADD LOGO IMG*/}
      {/* <Link to="/" className="navbar-logo">
        <img src="/logo.png" alt="Code n' Chaos Market Logo" style={{ height: '50px' }} />
      </Link> */}



      <h3>Code n' Chaos Market</h3>    

      <ul>
        <Link to="/"> Home </Link> 
        <Link to="/about"> About </Link>
        <Link to="/AddProduct"> Products </Link> 

      </ul>

    </nav> 

  )

}

export default Navbar;






// Just in case for Styling or reference
// https://luqmanshaban.medium.com/creating-a-responsive-navbar-in-react-a-beginners-guide-creating-a-responsive-navbar-in-react-c454acaa55a

  