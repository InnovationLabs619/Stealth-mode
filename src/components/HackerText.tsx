"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HackerTextProps {
    text: string;
    className?: string;
    speed?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function HackerText({ text, className, speed = 50 }: HackerTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let currentIteration = 0;

        const animate = () => {
            timer = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < currentIteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (currentIteration >= text.length) {
                    clearInterval(timer);
                }

                currentIteration += 1 / 3; // Slow down the reveal
            }, speed);
        };

        animate();

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span className={cn("font-mono", className)}>
            {displayText}
        </span>
    );
}
