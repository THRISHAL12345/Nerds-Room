"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./membership.module.css";
import { motion } from "framer-motion";

const Membership = () => {
    const [name, setName] = useState("Your Name");
    const [role, setRole] = useState("Full Stack Dev");
    const [stack, setStack] = useState("React, Node, Next.js");

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <h1 className={styles.title}>Get Your Nerd Card</h1>
                    <p className={styles.subtitle}>Official proof that you build cool stuff.</p>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Name / Alias</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength={15}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Role (e.g. Hacker, Designer)</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            maxLength={20}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Main Stack (Comma separated)</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={stack}
                            onChange={(e) => setStack(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <motion.div
                        className={styles.card}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.cardTitle}>Nerds Room</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.avatarPlaceholder}>👾</div>
                            <h2 className={styles.memberName}>{name || "Unknown"}</h2>
                            <p className={styles.memberRole}>{role || "Builder"}</p>

                            <div className={styles.memberStack}>
                                {stack.split(",").map((tech, i) => (
                                    <span key={i} className={styles.stackTag}>{tech.trim()}</span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.barcode}></div>
                            <span className={styles.idNumber}>#0042</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Membership;
