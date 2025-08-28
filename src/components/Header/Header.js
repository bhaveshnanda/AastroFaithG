'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Headphones } from 'lucide-react';
import styles from './Header.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navigationItems = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/About' },
    { name: 'Services', href: '/Services' },
    { name: 'Book-Appointment', href: '/Appointment' },
    { name: 'Contact', href: '/Contact' },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

// Close on click outside + scroll
useEffect(() => {
  if (!isMobileMenuOpen) return;

  const handleClickOutside = (event) => {
    // If clicked target is NOT inside the navbar, then close
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsMobileMenuOpen(false);
  };

  // Use capture phase so it runs before React's onClick
  document.addEventListener('click', handleClickOutside, true);
  window.addEventListener('scroll', handleScroll);

  return () => {
    document.removeEventListener('click', handleClickOutside, true);
    window.removeEventListener('scroll', handleScroll);
  };
}, [isMobileMenuOpen]);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo Section */}
          <Link href="/" className={styles.logoSection}>
            <div className={styles.logoIcon}>
              <Headphones />
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>Astro Faith G</h1>
              <p className={styles.logoSubtitle}>India's no. 1 Astrologer Gopal Agrawal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navButton} ${item.name === "Contact" ? styles.contactBtn : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.mobileNavButton} ${item.name === "Contact" ? styles.contactBtn : ""}`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
