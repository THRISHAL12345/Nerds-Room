"use client";

import styles from "./NoiseOverlay.module.css";

const NoiseOverlay = () => {
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.scanline}></div>
        </>
    );
};

export default NoiseOverlay;
