"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CatWelcome() {
  const [show, setShow] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animation/Cat Movement.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  useEffect(() => {
    if (!animationData) return;

    let timeout: NodeJS.Timeout;

    const hasVisited = localStorage.getItem("hasVisited");
    const isFirstVisit = !hasVisited;

    // Determine initial state
    if (isFirstVisit) {
      setShow(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      // 30% chance to show initially on reload
      if (Math.random() < 0.3) {
        setShow(true);
      } else {
        // Determine random next appearance
        const randomDelay = Math.random() * 10000 + 5000; // 5-15s delay
        timeout = setTimeout(() => setShow(true), randomDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [animationData]);

  // Cycle effect: When 'show' changes, schedule the next state change
  useEffect(() => {
    if (!animationData) return;

    let timeout: NodeJS.Timeout;

    if (show) {
      // If shown, hide after 10 seconds
      timeout = setTimeout(() => {
        setShow(false);
      }, 10000);
    } else {
      // If hidden, show again after random delay (15-45 seconds)
      const randomDelay = Math.random() * 30000 + 15000;
      timeout = setTimeout(() => {
        setShow(true);
      }, randomDelay);
    }

    return () => clearTimeout(timeout);
  }, [show, animationData]);

  if (!animationData) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed -bottom-4 right-2 z-[60] w-24 h-24 sm:-bottom-6 sm:right-10 sm:w-28 sm:h-28 md:-bottom-8 md:right-20 md:w-32 md:h-32 pointer-events-none dark:invert"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
