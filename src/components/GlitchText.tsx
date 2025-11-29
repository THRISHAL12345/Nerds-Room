"use client";

import styles from "./GlitchText.module.css";
import clsx from "clsx";

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

const GlitchText = ({ text, className, as: Tag = "h1" }: GlitchTextProps) => {
    return (
        <Tag
            className={clsx(styles.glitch, className)}
            data-text={text}
        >
            {text}
        </Tag>
    );
};

export default GlitchText;
