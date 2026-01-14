"use client";

import { motion } from "framer-motion";

export default function EnergyRain() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, y: "100vh" }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: "-100vh"
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-purple-500 to-transparent"
            style={{ left: `${left}%` }}
          />
        );
      })}
    </div>
  );
}
