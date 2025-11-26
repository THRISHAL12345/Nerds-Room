"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Stickers */}
            <motion.div className={styles.sticker} style={{ top: '15%', left: '10%', rotate: '-15deg' }} animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}>🚀</motion.div>
            <motion.div className={styles.sticker} style={{ top: '20%', right: '15%', rotate: '10deg' }} animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>💻</motion.div>
            <motion.div className={styles.sticker} style={{ bottom: '20%', left: '15%', rotate: '5deg' }} animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }}>⚡</motion.div>
            <motion.div className={styles.sticker} style={{ bottom: '15%', right: '10%', rotate: '-10deg' }} animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>👾</motion.div>

            {/* Live Pulse Widget */}
            <motion.div
                className={styles.livePulse}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <span className={styles.pulseDot}></span>
                <span className={styles.pulseText}>142 Hackers Online • 3 Ships in last hour</span>
            </motion.div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            >
                <h1 className={styles.title}>
                    Where Builders, Hackers & Creators Meet.
                </h1>
                <p className={styles.subtitle}>
                    A community designed for students, innovators, and future tech leaders.
                </p>

                <div className={styles.ctaContainer}>
                    <motion.button
                        className={styles.primaryBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Our Community
                    </motion.button>
                    <motion.button
                        className={styles.secondaryBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Partner With Us
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
