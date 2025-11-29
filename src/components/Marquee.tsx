"use client";

import styles from "./Marquee.module.css";
import { FaBolt, FaCode, FaRocket } from "react-icons/fa";

const Marquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {/* Duplicate content for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <span key={i} className={styles.text}>
                        BUILD <FaBolt className={styles.icon} /> SHIP <FaRocket className={styles.icon} /> REPEAT <FaCode className={styles.icon} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
