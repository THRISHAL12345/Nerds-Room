"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";
import clsx from "clsx";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current && trailerRef.current) {
                // Main cursor follows instantly
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

                // Trailer follows with delay (using animate for smooth trailing if desired, or just CSS transition)
                // For simple trailing, we can just update position and let CSS transition handle the lag
                trailerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div className={clsx(isHovered && styles.hovered)}>
            <div ref={cursorRef} className={styles.cursor} />
            <div ref={trailerRef} className={styles.trailer} />
        </div>
    );
};

export default CustomCursor;
