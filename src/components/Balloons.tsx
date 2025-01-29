"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const colors: string[] = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]

// Define a type for a single balloon
interface Balloon {
  x: number
  delay: number
  duration: number
  rotation: number
  color1: string
  color2: string
}

export default function Balloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  useEffect(() => {
    setBalloons(
      Array.from({ length: 15 }, () => ({
        x: Math.random() * 100, // Use percentage to avoid SSR issues
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
        rotation: Math.random() * 20 - 10,
        color1: colors[Math.floor(Math.random() * colors.length)],
        color2: colors[Math.floor(Math.random() * colors.length)],
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ y: "110vh", x: `${balloon.x}vw` }}
          animate={{
            y: "-10vh",
            x: [`${balloon.x - 5}vw`, `${balloon.x + 5}vw`],
            transition: {
              y: { duration: balloon.duration, repeat: Infinity, ease: "easeOut" },
              x: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            },
          }}
        >
          <div
            className="w-16 h-20 relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${balloon.color1}, ${balloon.color2})`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              transform: `rotate(${balloon.rotation}deg)`,
            }}
          >
            {/* String */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-16 bg-gray-500 -translate-x-1/2" />

            {/* Tie */}
            <div
              className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 translate-y-1/2"
              style={{ background: balloon.color2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
