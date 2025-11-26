"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./events.module.css";
import { motion } from "framer-motion";

const Events = () => {
    const upcomingEvents = [
        {
            title: "Winter Hackathon 2025",
            date: "Dec 15-17, 2025",
            location: "Nerds HQ + Online",
            desc: "48 hours of pure building. Theme: 'AI for Good'. $10k in prizes.",
        },
        {
            title: "Web3 Workshop",
            date: "Jan 05, 2026",
            location: "Discord Stage",
            desc: "Learn how to build your first dApp with Solidity and Next.js.",
        },
        {
            title: "Founder's Fireside Chat",
            date: "Jan 20, 2026",
            location: "Twitter Space",
            desc: "AMA with the founders of top YC startups. Get your questions ready.",
        },
    ];

    const pastEvents = [
        {
            title: "Summer Code Fest",
            date: "Aug 20, 2025",
            location: "Online",
            desc: "Over 500 participants built 100+ projects.",
        },
        {
            title: "Design Systems Workshop",
            date: "Sep 10, 2025",
            location: "Zoom",
            desc: "Mastering Figma variables and auto-layout.",
        },
    ];

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Upcoming Chaos</h1>
                    <p className={styles.subtitle}>Join us, build stuff, break things, repeat.</p>
                </div>

                <div className={styles.timeline}>
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className={styles.eventCard}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.dateBadge}>{event.date}</div>
                            <h2 className={styles.eventTitle}>{event.title}</h2>
                            <p className={styles.eventDetails}>📍 {event.location}</p>
                            <p className={styles.eventDesc}>{event.desc}</p>
                            <button className={styles.registerBtn}>Register Now</button>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.pastEvents}>
                    <h2 className={styles.pastTitle}>Past Events</h2>
                    <div className={styles.grid}>
                        {pastEvents.map((event, index) => (
                            <div key={index} className={styles.eventCard} style={{ borderColor: '#555', boxShadow: 'none' }}>
                                <div className={styles.dateBadge} style={{ background: '#555' }}>{event.date}</div>
                                <h3 className={styles.eventTitle} style={{ color: '#aaa' }}>{event.title}</h3>
                                <p className={styles.eventDesc} style={{ color: '#777' }}>{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Events;
