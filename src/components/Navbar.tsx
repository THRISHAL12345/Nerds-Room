"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={clsx(styles.navbar, isScrolled && styles.scrolled)}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <div className={styles.textLogo}>
                        <span className={styles.logoTextBlue}>nerds</span>
                        <span className={styles.logoTextBlue}>r</span>
                        <div className={styles.infinityContainer}>
                            <svg viewBox="0 0 100 50" className={styles.infinitySvg}>
                                <path
                                    d="M25,25 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0 M75,25 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
                                    fill="none"
                                    stroke="var(--color-primary-neon-green)"
                                    strokeWidth="12"
                                />
                                <circle cx="25" cy="25" r="6" fill="var(--color-primary-deep-blue)" />
                                <circle cx="75" cy="25" r="6" fill="var(--color-primary-deep-blue)" />
                            </svg>
                        </div>
                        <span className={styles.logoTextBlue}>m</span>
                    </div>
                </Link>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={clsx(styles.bar, isMobileMenuOpen && styles.barOpen)}></span>
                <span className={clsx(styles.bar, isMobileMenuOpen && styles.barOpen)}></span>
                <span className={clsx(styles.bar, isMobileMenuOpen && styles.barOpen)}></span>
            </div>

            <div className={clsx(styles.navContent, isMobileMenuOpen && styles.active)}>
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/projects" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
                    <li><Link href="/membership" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Join</Link></li>
                    <li><Link href="/resources" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Stash</Link></li>
                    <li><Link href="/events" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
                    <li><Link href="/blog" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                    <li><Link href="/contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                </ul>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <div className={styles.icons}>
                        <FaSearch className={styles.icon} />
                        <FaDiscord className={styles.icon} />
                        <FaTwitter className={styles.icon} />
                        <FaInstagram className={styles.icon} />
                    </div>
                    <button className={styles.joinBtn}>Join Us</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
