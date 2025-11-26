"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./blog.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Blog = () => {
    const posts = [
        {
            title: "How to Win Your First Hackathon",
            category: "Guide",
            date: "Nov 20, 2025",
            excerpt: "Tips and tricks from seasoned hackers on how to ideate, build, and pitch in 24 hours.",
        },
        {
            title: "The Future of AI Agents",
            category: "Tech",
            date: "Nov 15, 2025",
            excerpt: "Exploring the next generation of autonomous agents and how they will reshape development.",
        },
        {
            title: "Building Community in Web3",
            category: "Community",
            date: "Nov 10, 2025",
            excerpt: "Why decentralized communities are the future of collaboration and how to build one.",
        },
        {
            title: "Design Systems 101",
            category: "Design",
            date: "Nov 05, 2025",
            excerpt: "A crash course on creating scalable and consistent design systems for your projects.",
        },
        {
            title: "From Student to Founder",
            category: "Career",
            date: "Oct 28, 2025",
            excerpt: "Real stories of students who turned their side projects into full-time startups.",
        },
        {
            title: "Next.js 15: What's New?",
            category: "Tech",
            date: "Oct 20, 2025",
            excerpt: "A deep dive into the latest features and improvements in the Next.js ecosystem.",
        },
    ];

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>The Nerds Log</h1>
                    <p className={styles.subtitle}>Insights, tutorials, and stories from the community.</p>
                </div>

                <motion.div
                    className={styles.featured}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.featuredBadge}>New Drop</div>
                    <div className={styles.cardMeta}>Featured • Nov 25, 2025</div>
                    <h2 className={styles.featuredTitle}>Why "Breaking Things" is Good for You</h2>
                    <p className={styles.featuredExcerpt}>
                        In the world of software, failure is often seen as a setback. But for true innovators, breaking things is just the first step to building something better. Here is why you should embrace the chaos.
                    </p>
                    <button className={styles.readMore}>Read Article</button>
                </motion.div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardMeta}>{post.category} • {post.date}</div>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <p className={styles.cardExcerpt}>{post.excerpt}</p>
                            <Link href="#" className={styles.readMore}>Read</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Blog;
