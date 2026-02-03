"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CatReach() {
    const [isReaching, setIsReaching] = useState(false);
    const [positionX, setPositionX] = useState("50%");

    useEffect(() => {
        // Initial delay before first reach
        const initialTimeout = setTimeout(() => {
            triggerReach();
        }, 5000);

        const triggerReach = () => {
            // Random position: 10% to 90% of screen width
            const randomX = Math.floor(Math.random() * 80) + 10;
            setPositionX(`${randomX}%`);
            setIsReaching(true);

            // Retract after animation
            setTimeout(() => {
                setIsReaching(false);

                // Schedule next reach (randomly between 10 and 30 seconds)
                const nextDelay = Math.random() * 20000 + 10000;
                setTimeout(triggerReach, nextDelay);
            }, 4000); // 4 seconds visible duration matches animation
        };

        return () => clearTimeout(initialTimeout);
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
            <AnimatePresence>
                {isReaching && (
                    <motion.div
                        initial={{ y: -150 }}
                        animate={{
                            y: -20,
                            rotate: [0, -5, 5, -5, 0], // Wiggle effect
                        }}
                        exit={{ y: -150 }}
                        transition={{
                            y: { duration: 1, ease: "easeOut" },
                            rotate: { delay: 1, duration: 2, repeat: 0 }
                        }}
                        style={{
                            position: "absolute",
                            left: positionX,
                            top: 0
                        }}
                    >
                        {/* Cute Cat Paw SVG */}
                        <svg
                            width="100"
                            height="160"
                            viewBox="0 0 100 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="drop-shadow-lg"
                        >
                            {/* Arm/Fur */}
                            <path
                                d="M20 0V100C20 125 35 140 50 140C65 140 80 125 80 100V0H20Z"
                                className="fill-white dark:fill-zinc-200"
                                stroke="currentColor" // Use current text color for border if needed, or specific color
                                strokeWidth="0"
                            />

                            {/* Pads (Toes) */}
                            <circle cx="35" cy="115" r="8" className="fill-pink-300 dark:fill-pink-400" />
                            <circle cx="50" cy="108" r="8" className="fill-pink-300 dark:fill-pink-400" />
                            <circle cx="65" cy="115" r="8" className="fill-pink-300 dark:fill-pink-400" />

                            {/* Main Pad */}
                            <path
                                d="M50 122C42 122 36 127 38 134C40 141 50 145 50 145C50 145 60 141 62 134C64 127 58 122 50 122Z"
                                className="fill-pink-300 dark:fill-pink-400"
                            />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
