"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#blog">Blog</Link></li>
                        <li><Link href="#events">Events</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                        <li><Link href="#">Join Us</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <ul className={styles.links}>
                        <li><a href="mailto:hello@nerdsroom.com">hello@nerdsroom.com</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Partnerships</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Newsletter</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Stay updated with our latest events and news.</p>
                    <div className={styles.newsletter}>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Enter your email" className={styles.input} />
                            <button className={styles.subscribeBtn}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Copyright © 2025 Nerds Room. All rights reserved.</p>
                <div className={styles.legal}>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
