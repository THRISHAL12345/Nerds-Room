"use client";

import { motion } from "framer-motion";
import styles from "./Motive.module.css";
import Image from "next/image";

const Motive = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.illustration}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`${styles.circle} ${styles.circle1}`}></div>
                    <div className={`${styles.circle} ${styles.circle2}`}></div>
                    <div className={styles.card}>
                        <Image
                            src="/assets/logo-icon.jpg"
                            alt="Nerds Room Icon"
                            width={200}
                            height={200}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>
                        Why Does <span className={styles.highlight}>Nerds Room</span> Exist?
                    </h2>
                    <p className={styles.text}>
                        We believe that the future belongs to those who build it. Nerds Room was created to bridge the gap between academic learning and real-world innovation.
                    </p>
                    <p className={styles.text}>
                        Our mission is to empower students by providing them with the resources, mentorship, and community they need to push the boundaries of what is possible.
                    </p>
                    <p className={styles.text}>
                        Whether it is through hackathons, workshops, or collaborative projects, we are dedicated to fostering a culture of continuous learning and fearless experimentation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Motive;
