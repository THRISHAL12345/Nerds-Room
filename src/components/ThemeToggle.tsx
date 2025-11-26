"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDark(false);
            document.body.classList.add("light-theme");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "var(--color-text-main)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
                transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(15deg)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
            aria-label="Toggle Theme"
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;
