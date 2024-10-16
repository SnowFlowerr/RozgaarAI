// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/Logo.png'; // Assuming you have a logo image in the assets folder
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const sign = useSelector((state) => state.sign.value)
  const navigat=useNavigate()
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Jobbright Logo" className={styles.logoImage} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="/" className={styles.navItem}>Home</a></li>
          <li><a href="/searchjobs" className={styles.navItem}>Jobs</a></li>
          {/* <li><a href="/features" className={styles.navItem}>Features</a></li> */}
          <li><a href="/mentors" className={styles.navItem}>Mentors</a></li>
          {/* <li><a href="/latestposts" className={styles.navItem}>Latest Posts</a></li> */}
          {/* <li><a href="/about" className={styles.navItem}>About Us</a></li> */}
        </ul>
        <div className={styles.authButtons}>
        <button className={`${styles.latest}`} onClick={()=>navigat("/latestposts")}>Latest Posts</button>
          {
            sign?
            <div className={styles.profile} onClick={()=>navigat("/profile")}>
              <img src={sign.img} alt="" width={"100%"} height={"100%"}/>
            </div>
            :
            <>
            <button className={`${styles.button} ${styles.signIn}`} onClick={()=>navigat("/signin")}>Sign In</button>
            <button className={`${styles.button} ${styles.joinNow}`} onClick={()=>navigat("/signin")}>Join Now</button>
          </>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
