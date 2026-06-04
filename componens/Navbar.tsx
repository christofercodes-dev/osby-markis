"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            OSBY MARKIS &<span> PERSIENN</span>
          </Link>

          {/* Desktop-länkar (döljs på mobil) */}
          <ul className={styles.desktopLinks}>
            <li><Link href="#vision">Vår vision</Link></li>
            <li><Link href="#inspo">Inspiration</Link></li>
            <li><Link href="#kontakt" className={styles.cta}>Boka konsultation</Link></li>
          </ul>

          {/* Hamburgare (syns bara på mobil) */}
          <button className={styles.burger} onClick={toggleMenu} aria-label="Meny">
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`} onClick={closeMenu} />

      {/* Mobil Side Menu */}
      <div className={`${styles.sideMenu} ${isOpen ? styles.menuOpen : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu} aria-label="Stäng">
          <span className={styles.closeLine}></span>
          <span className={styles.closeLine}></span>
          
        </button>

        <ul className={styles.mobileLinks}>
          <li><Link href="#vision" onClick={closeMenu}>Vår vision</Link></li>
          <li><Link href="#inspo" onClick={closeMenu}>Inspiration</Link></li>
          <li><Link href="#kontakt" onClick={closeMenu}>Boka hembesök</Link></li>
          <li className={styles.mobileSocials}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;