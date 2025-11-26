"use client";

import { motion } from "framer-motion";
import styles from "./FounderLetter.module.css";

const FounderLetter = () => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.paper}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={`${styles.sticker} ${styles.sticker1}`}>🚀</div>
                <div className={`${styles.sticker} ${styles.sticker2}`}>✨</div>

                <h2 className={styles.title}>A Letter to Future Builders</h2>

                <div className={styles.content}>
                    <p>
                        Dear Innovator,
                    </p>
                    <br />
                    <p>
                        I started Nerds Room with a simple vision: to create a space where curiosity is celebrated and failure is just another step towards success.
                    </p>
                    <br />
                    <p>
                        We are not just a community; we are a movement. A movement of students, dreamers, and doers who refuse to accept the status quo. My hope is that here, you find your tribe, build your dreams, and shape the future.
                    </p>
                    <br />
                    <p>
                        The world needs your ideas. Let's build them together.
                    </p>
                </div>

                <div className={styles.signature}>
                    - The Founder
                </div>
            </motion.div>
        </section>
    );
};

export default FounderLetter;
