"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";

interface Footprint {
    id: number;
    x: number;
    y: number;
    rotate: number;
    side: "left" | "right";
}

export function CatFootprints() {
    const [footprints, setFootprints] = useState<Footprint[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let counter = 0;

        const interval = setInterval(() => {
            // Calculate margins based on max-w-4xl (approx 896px)
            // We assume window width. If window < content width, margins are 0 and footprints might overlap content or not appear.
            // Logic: Randomly pick a side.
            const side = Math.random() > 0.5 ? "left" : "right";
            const windowWidth = window.innerWidth;
            const contentWidth = 896; // max-w-4xl
            const margin = (windowWidth - contentWidth) / 2;

            if (margin <= 50) return; // Don't show if margins are too small

            let x;
            if (side === "left") {
                x = Math.random() * (margin - 40); // 40px padding/buffer
            } else {
                x = windowWidth - margin + Math.random() * (margin - 40);
            }

            const y = Math.random() * (window.innerHeight - 50);
            const rotate = Math.random() * 360;

            const newFootprint: Footprint = {
                id: counter++,
                x,
                y,
                rotate,
                side,
            };

            setFootprints((prev) => [...prev, newFootprint]);

            // Remove after animation
            setTimeout(() => {
                setFootprints((prev) => prev.filter((fp) => fp.id !== newFootprint.id));
            }, 4000); // 4 seconds total lifetime

        }, 2000); // Add new footprint every 2 seconds

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <AnimatePresence>
                {footprints.map((fp) => (
                    <motion.div
                        key={fp.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            left: fp.x,
                            top: fp.y,
                            transform: `rotate(${fp.rotate}deg)`,
                        }}
                        // Colors: Black in light mode, White in dark mode
                        className="text-black dark:text-white"
                    >
                        <PawPrint className="size-8 opacity-20" />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
