"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./resources.module.css";
import { motion } from "framer-motion";

const Resources = () => {
    const items = [
        {
            name: "GitHub Student Pack",
            desc: "Free access to the best developer tools.",
            icon: "🎒",
            link: "#",
        },
        {
            name: "Figma Design Kit",
            desc: "UI components for your next hackathon.",
            icon: "🎨",
            link: "#",
        },
        {
            name: "Vercel Hobby Plan",
            desc: "Deploy your frontend projects for free.",
            icon: "▲",
            link: "#",
        },
        {
            name: "Notion Template",
            desc: "Organize your life and projects.",
            icon: "📝",
            link: "#",
        },
        {
            name: "Public APIs List",
            desc: "A collective list of free APIs.",
            icon: "🔗",
            link: "#",
        },
        {
            name: "CSS Grid Guide",
            desc: "Master modern layouts in 10 mins.",
            icon: "📐",
            link: "#",
        },
        {
            name: "Google Fonts",
            desc: "Typography for the web.",
            icon: "🔤",
            link: "#",
        },
        {
            name: "Undraw Illustrations",
            desc: "Open source illustrations for any idea.",
            icon: "🖼️",
            link: "#",
        },
    ];

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>The Stash</h1>
                    <p className={styles.subtitle}>Equip yourself for the journey ahead.</p>
                </div>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className={styles.priceTag}>FREE</div>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.itemName}>{item.name}</h3>
                            <p className={styles.itemDesc}>{item.desc}</p>
                            <button className={styles.grabBtn}>GRAB</button>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Resources;
