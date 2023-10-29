import React from "react";
import navbarlogo from "../../assests/navbarlogo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src={navbarlogo} alt="navbarlogo" />
      </div>
      <div className={styles.middle}>
        <h4>Home</h4>
        <h4>Attorneys</h4>
        <h4>Practise Areas</h4>
        <h4>About Us</h4>
      </div>
      <button>Contact Now</button>
    </nav>
  );
};

export default Navbar;
