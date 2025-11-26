"use client";

import { useState, useEffect } from "react";
import styles from "./EventCountdown.module.css";
import { motion } from "framer-motion";

const EventCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set target date to 5 days from now for demo
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.bgText}>NEXT EVENT</div>
            <div className={styles.label}>
                Next Event Starts In:
            </div>

            <div className={styles.timer}>
                <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className={styles.timeLabel}>Days</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className={styles.timeLabel}>Hours</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className={styles.timeLabel}>Mins</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className={styles.timeLabel}>Secs</span>
                </div>
            </div>
        </div>
    );
};

export default EventCountdown;
