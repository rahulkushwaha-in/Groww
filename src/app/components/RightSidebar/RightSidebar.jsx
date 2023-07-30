// components/RightSidebar.js

import React from 'react';
import Link from 'next/link';
import styles from './RightSidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faImage, faUser} from '@fortawesome/free-solid-svg-icons';

/**
 * The `RightSidebar` component is a React functional component that renders a sidebar with a header,
 * profile section, and navigation menu.
 * @returns The RightSidebar component is returning a JSX element.
 */
const RightSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.header}>
        <h2>Right Sidebar</h2>
      </div>
      <div className={styles.profileSection}>
        <img
          className={styles.profileImage}
          src="https://play-lh.googleusercontent.com/c7ce8BUNgn9vyt9CgUg_xCFw56kWTPsiZuOKG8H8cJ94lt76-J8ZS3GCKUPJbjK7_Dk"
          alt="Profile"
        />
        <p className={styles.profileName}>Dummy</p>
        <p className={styles.profileUsername}>@Test</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
               
            <FontAwesomeIcon icon={faImage} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
                My Posts
               
            </Link>
          </li>
          <li>
            <Link href="/explore">
            <FontAwesomeIcon icon={faHeart} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
            
                Liked Posts
               
            </Link>
          </li>
          <li>
            <Link href="/notifications">
                <FontAwesomeIcon icon={faUser} style={{color: "#1da1f2",paddingRight:"0.5rem"}} />
                Followers
               
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RightSidebar;
