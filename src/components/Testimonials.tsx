"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Nerds Room gave me the confidence to ship my first product. The community support is unmatched.",
            name: "Alex Chen",
            role: "Full Stack Developer",
            initials: "AC"
        },
        {
            quote: "The hackathons here are intense but incredibly rewarding. I met my co-founder at one!",
            name: "Sarah Jones",
            role: "UX Designer",
            initials: "SJ"
        },
        {
            quote: "A perfect blend of learning and fun. The workshops are always up to date with latest tech.",
            name: "Mike Ross",
            role: "Student",
            initials: "MR"
        },
        {
            quote: "Finally a community that actually cares about builders. Highly recommend joining.",
            name: "Emily Blunt",
            role: "Product Manager",
            initials: "EB"
        },
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Community Stories</h2>

            <div className={styles.carousel}>
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <p className={styles.quote}>"{item.quote}"</p>
                        <div className={styles.profile}>
                            <div className={styles.avatar}>{item.initials}</div>
                            <div className={styles.info}>
                                <span className={styles.name}>{item.name}</span>
                                <span className={styles.role}>{item.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
