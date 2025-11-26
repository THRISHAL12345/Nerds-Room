"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <motion.div
                    className={styles.infoSide}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={styles.title}>Holla At Us</h1>
                    <p className={styles.text}>
                        Got a crazy idea? Want to partner up? Or just want to say hi? We are all ears. Drop us a message and we will get back to you faster than a Vercel deployment.
                    </p>

                    <div className={styles.postIt}>
                        <h3>Quick Contacts</h3>
                        <p>📧 hello@nerdsroom.com</p>
                        <p>📱 +1 (555) 123-4567</p>
                        <p>📍 Nerds HQ, Internet</p>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formSide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input type="text" className={styles.input} placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="Tell us something cool..."></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default Contact;
