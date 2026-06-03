"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hanterar bakgrundsfärg vid scroll för bättre läsbarhet
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          OSBY MARKIS &<span> PERSIENN</span>
        </Link>

        {/* Overlay som döljer resten av sidan när menyn är öppen */}
        <div 
          className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`} 
          onClick={closeMenu}
        />

        {/* Navigeringslänkar */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
          <li className={styles.navItem}>
            <Link href="#vision" onClick={closeMenu}>Vår vision</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#inspo" onClick={closeMenu}>Inspiration</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#kontakt" className={styles.cta} onClick={closeMenu}>
              Boka konsultation
            </Link>
          </li>
        </ul>

        {/* Hamburgarikon */}
        <button 
          className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Meny"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;