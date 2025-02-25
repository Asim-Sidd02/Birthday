"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      setParticles(
        Array.from({ length: 20 }).map(() => ({
          x: Math.random() * windowSize.width,
          y: Math.random() * windowSize.height,
        }))
      )
    }
  }, [windowSize])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 overflow-x-hidden relative">
      {windowSize.width > 0 && (
        <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} />
      )}
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Happy Birthday Ayesha!</h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">A magical journey awaits you...</p>
      </motion.div>
      <motion.div
        className="z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          href="/welcome"
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 flex items-center shadow-lg"
        >
          Open Your Gift <Gift className="ml-2" />
        </Link>
      </motion.div>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: particle.x,
            y: particle.y,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}
