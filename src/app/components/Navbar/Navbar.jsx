import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

/**
 * The above code defines a functional component called Navbar that renders a navigation bar with links
 * to different pages.
 * @returns The Navbar component is returning a navigation bar with a brand logo and a list of
 * navigation links.
 */
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          GrowwGram
        </Link>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>
           Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
