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
                    <Image
                        src="/assets/logo-text.jpg"
                        alt="Nerds Room Logo"
                        width={150}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
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
