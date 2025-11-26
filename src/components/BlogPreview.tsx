"use client";

import Link from "next/link";
import styles from "./BlogPreview.module.css";
import { motion } from "framer-motion";

const BlogPreview = () => {
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
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Fresh From The Log</h2>
                    <Link href="/blog" className={styles.viewAllBtn}>
                        View All Posts →
                    </Link>
                </div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardMeta}>{post.category} • {post.date}</div>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <p className={styles.cardExcerpt}>{post.excerpt}</p>
                            <Link href="/blog" className={styles.readMore}>Read</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
