// components/Sidebar.js

import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faBell, faMessage} from '@fortawesome/free-solid-svg-icons';

/**
 * The Sidebar component is a React functional component that renders a sidebar with a logo, navigation
 * links, and a profile section.
 * @returns The Sidebar component is returning a JSX element.
 */
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">
           
        <img src="https://play-lh.googleusercontent.com/c7ce8BUNgn9vyt9CgUg_xCFw56kWTPsiZuOKG8H8cJ94lt76-J8ZS3GCKUPJbjK7_Dk" alt=""/>
           
        </Link>
        <p>GrowwGram</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
            <FontAwesomeIcon icon={faHouse} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
                Home  
            </Link>
          </li>
          <li>
            <Link href="/explore">
            <FontAwesomeIcon icon={faCompass} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
            Explore
            </Link>
          </li>
          <li>
            <Link href="/notifications">
            <FontAwesomeIcon icon={faBell} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
                Notifications
               
            </Link>
          </li>
          <li>
            <Link href="/messages">
            <FontAwesomeIcon icon={faMessage} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
               Messages
               
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profileSection}>
        <img
          className={styles.profileImage}
          src="https://play-lh.googleusercontent.com/c7ce8BUNgn9vyt9CgUg_xCFw56kWTPsiZuOKG8H8cJ94lt76-J8ZS3GCKUPJbjK7_Dk"
          alt="Profile"
        />
        <p className={styles.profileName}>Dummy</p>
        <p className={styles.profileUsername}>@Test</p>
      </div>
    </div>
  );
};

export default Sidebar;
