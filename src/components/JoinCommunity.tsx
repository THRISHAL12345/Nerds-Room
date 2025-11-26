"use client";

import { motion } from "framer-motion";
import { FaNetworkWired, FaLightbulb, FaTools } from "react-icons/fa";
import styles from "./JoinCommunity.module.css";

const JoinCommunity = () => {
    const cards = [
        {
            icon: <FaNetworkWired />,
            title: "Networking",
            text: "Connect with like-minded individuals, mentors, and industry leaders.",
        },
        {
            icon: <FaLightbulb />,
            title: "Learning",
            text: "Access exclusive workshops, resources, and knowledge-sharing sessions.",
        },
        {
            icon: <FaTools />,
            title: "Building",
            text: "Collaborate on projects, hackathons, and turn ideas into reality.",
        },
    ];

    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.headline}>Become a Part of the Nerds Room Community</h2>
                <p className={styles.description}>
                    Join a thriving ecosystem where innovation meets collaboration. Unlock your potential today.
                </p>

                <div className={styles.grid}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardText}>{card.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    className={styles.joinBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Join Now
                </motion.button>
            </motion.div>
        </section>
    );
};

export default JoinCommunity;
