"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import styles from "./Socials.module.css";

const Socials = () => {
    const socials = [
        { icon: <FaLinkedin />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
        { icon: <FaDiscord />, href: "#" },
    ];

    return (
        <section className={styles.section}>
            {socials.map((social, index) => (
                <Link key={index} href={social.href} className={styles.iconLink} target="_blank">
                    {social.icon}
                </Link>
            ))}
        </section>
    );
};

export default Socials;
