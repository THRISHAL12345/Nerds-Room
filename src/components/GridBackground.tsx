"use client";

import { useEffect, useRef } from "react";
import styles from "./GridBackground.module.css";

const GridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];
        const spacing = 40;
        const mouse = { x: -1000, y: -1000 };

        // Initialize dots
        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                dots.push({ x, y, baseX: x, baseY: y });
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            dots.length = 0;
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    dots.push({ x, y, baseX: x, baseY: y });
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Get current theme color for dots
            const isLight = document.body.classList.contains("light-theme");
            ctx.fillStyle = isLight ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)";

            dots.forEach((dot) => {
                const dx = mouse.x - dot.baseX;
                const dy = mouse.y - dot.baseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;
                const force = (maxDistance - distance) / maxDistance;

                if (distance < maxDistance) {
                    const angle = Math.atan2(dy, dx);
                    const moveX = Math.cos(angle) * force * 20;
                    const moveY = Math.sin(angle) * force * 20;
                    dot.x = dot.baseX - moveX;
                    dot.y = dot.baseY - moveY;

                    // Highlight active dots
                    ctx.fillStyle = "rgba(178, 232, 0, 0.8)"; // Neon Green
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                    // Reset fill style
                    ctx.fillStyle = isLight ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)";
                } else {
                    dot.x = dot.baseX;
                    dot.y = dot.baseY;
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default GridBackground;
