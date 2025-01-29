"use client"

import { motion } from "framer-motion"

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -200,
            x: `calc(${Math.random() * 100}vw - 50px)`,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 20,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="w-20 h-24 relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${colors[i % colors.length]}, ${
                colors[(i + 1) % colors.length]
              })`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-gray-400 -translate-x-1/2" />
            <div
              className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 translate-y-1/2"
              style={{ background: colors[(i + 2) % colors.length] }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
