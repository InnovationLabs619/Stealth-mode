"use client";

import { useEffect, useRef } from "react";

export default function SpotlightBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            container.style.setProperty("--x", `${clientX}px`);
            container.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
        >
            <div
                className="absolute inset-0 opacity-20 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), var(--accent), transparent 40%)`,
                }}
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 brightness-100 contrast-150 mix-blend-overlay" />
        </div>
    );
}
