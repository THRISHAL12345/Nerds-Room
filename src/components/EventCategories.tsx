"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./EventCategories.module.css";

const EventCategories = () => {
    const events = [
        { icon: "🧑‍💻", title: "Hackathons", desc: "24-48 hour coding marathons to solve real problems." },
        { icon: "💡", title: "Ideathons", desc: "Brainstorming sessions to spark the next big idea." },
        { icon: "✏️", title: "Designathons", desc: "Creative challenges for UI/UX and graphic designers." },
        { icon: "🧪", title: "Workshops", desc: "Hands-on sessions on the latest tech stacks." },
        { icon: "🚀", title: "Cohorts", desc: "Long-term mentorship programs for dedicated learners." },
    ];

    const partners = ["Google", "Microsoft", "GitHub", "Vercel", "Notion", "Figma", "DigitalOcean", "AWS"];

    return (
        <section className={styles.section} id="events">
            <h2 className={styles.title}>What We Do</h2>

            <div className={styles.grid}>
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className={styles.icon}>{event.icon}</div>
                        <h3 className={styles.cardTitle}>{event.title}</h3>
                        <p className={styles.cardDesc}>{event.desc}</p>
                        <Link href="#" className={styles.cardLink}>
                            View Upcoming Events <FaArrowRight />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className={styles.partnersContainer}>
                <div className={styles.partnersTrack}>
                    {[...partners, ...partners].map((partner, index) => (
                        <span key={index} className={styles.partnerLogo}>{partner}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCategories;
