"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import confetti from "canvas-confetti"
import { Heart } from "lucide-react"
import Balloons from "../../components/Balloons"
import FinalCard from "../../components/FinalCard"

export default function Wish() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                })
            }, 300)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-orange-500 flex flex-col items-center justify-center p-4 text-white overflow-hidden">
            <Balloons />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl mb-8"
            >
                <h1 className="text-4xl font-bold mb-6">
                    Happy Birthday! <Heart className="inline-block text-red-500" />
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    💖🎈 May your day be filled with love, laughter, and all the happiness in the world!✨ On this special day, I wish you all the joy, success, and love that you so richly deserve.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    May this year be your best one yet! Keep building, keep innovating, and may this year bring you exciting projects, endless creativity, and success in everything you develop! 🎉👩‍💻✨
                </motion.p>
            </motion.div>
            <FinalCard />
        </div>
    )
}
