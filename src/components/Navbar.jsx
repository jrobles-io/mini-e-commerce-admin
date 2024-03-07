import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="navbar">

      {/*LOGO IMG*/}
      <Link to="/" className="navbar-logo">
        <img src="../src/images/codenchaosLogo.png" alt="Code n' Chaos Market Logo"  /> 
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/AddProduct">Add Product</Link></li>
      </ul>

    </nav> 

  )

}

export default Navbar;


  