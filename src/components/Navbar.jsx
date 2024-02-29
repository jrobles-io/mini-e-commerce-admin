import { useState } from "react"

function Navbar () {

  return (
    <header className="navbar">

      {/* ADD LOGO */}
      <navbar>
      <h3>Geek Corner</h3>     
        <a href="/#"> Home </a>    
        <a href="/#"> Items </a>
        <a href="/#"> All Products </a>

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

      </navbar>


    </header> 

  )

}

export default Navbar;











// import styles from "../Navbar.css"; 


// function Navbar () {

//   // adding the states 
//   const [isActive, setIsActive] = useState(false);
//   //add the active class
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };
//   //clean up function to remove the active class
//   const removeActive = () => {
//     setIsActive(false)
//   }

//   return (

//     <div className="App">
//       <header className="App-header">
//         <nav className={`${styles.navbar}`}>

//           {/* for a logo */}
//           <a href='#home' className={`${styles.logo}`}> Geek Corner </a>

//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>

//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}> Home </a>
//             </li>

//             <li onClick={removeActive}>
//                 <a href='#home' className={`${styles.navLink}`}> Items </a>
//             </li>

//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}> All products </a>
//             </li>

//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}> Contact </a>
//             </li>

//           </ul>

//           <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  
//             onClick={toggleActiveClass}>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//           </div>


//         </nav>
//       </header>


//       {/* <div>Geek Corner</div> */}

//     </div>
//   )
// }

// export default Navbar;

// /* /*

// https://luqmanshaban.medium.com/creating-a-responsive-navbar-in-react-a-beginners-guide-creating-a-responsive-navbar-in-react-c454acaa55a

// function Navbar () {
//     return (
//       <nav>
//         <p>Geek Corner</p>
//       </nav>
//     );
//   }
  
//   export default Navbar; */
  