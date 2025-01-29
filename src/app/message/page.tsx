"use client"

import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function Message() {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-orange-500 flex flex-col items-center justify-center p-4 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                <h1 className="text-4xl font-bold mb-6">My Dearest Sister,</h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    On this special day, I want to celebrate you and the incredible person you are. You've been my rock, my
                    confidante, and my partner in crime since day one.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    Your kindness, strength, and infectious laughter have always been an inspiration. As you embark on another
                    year of life's adventures, I want you to know how incredibly proud I am to call you my sister.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-lg mb-6"
                >
                    May this year bring you all the joy, success, and love you deserve. Here's to creating more beautiful memories
                    together!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-2xl font-bold"
                >
                    Happy Birthday! Love you to the moon and back! 🌙✨
                </motion.p>
            </motion.div>
        </div>
    )
}

