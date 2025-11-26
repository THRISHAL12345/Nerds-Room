"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./projects.module.css";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "AI Resume Builder",
            desc: "An intelligent tool that crafts the perfect resume based on job descriptions.",
            stack: ["Next.js", "OpenAI", "Tailwind"],
            initials: "RB",
        },
        {
            title: "Crypto Tracker",
            desc: "Real-time cryptocurrency dashboard with price alerts and portfolio management.",
            stack: ["React", "CoinGecko API", "Chart.js"],
            initials: "CT",
        },
        {
            title: "DevSocial",
            desc: "A social network exclusively for developers to share snippets and resources.",
            stack: ["MERN", "Socket.io", "Redux"],
            initials: "DS",
        },
        {
            title: "TaskMaster",
            desc: "Gamified productivity app that turns your to-do list into an RPG.",
            stack: ["Vue", "Firebase", "PixiJS"],
            initials: "TM",
        },
        {
            title: "EcoScan",
            desc: "Mobile app that scans products to reveal their environmental impact.",
            stack: ["React Native", "TensorFlow", "Node"],
            initials: "ES",
        },
        {
            title: "MusicJam",
            desc: "Collaborative music making in the browser using Web Audio API.",
            stack: ["Web Audio", "Socket.io", "React"],
            initials: "MJ",
        },
    ];

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>The Ship Log</h1>
                    <p className={styles.subtitle}>See what the community is building. Ship or sink.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imagePlaceholder}>{project.initials}</div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{project.title}</h2>
                                <p className={styles.cardDesc}>{project.desc}</p>
                                <div className={styles.stack}>
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className={styles.tag}>{tech}</span>
                                    ))}
                                </div>
                                <button className={styles.viewBtn}>View Ship</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Projects;
