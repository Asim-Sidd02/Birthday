"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import confetti from "canvas-confetti"
import { Heart } from "lucide-react"
import Balloons from "@/components/Balloons"

export default function Wish() {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-orange-500 flex flex-col items-center justify-center p-4 text-white overflow-hidden">
            <Balloons />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
            >
                <h1 className="text-4xl font-bold mb-6">
                    Happy Birthday, My Dearest Sister! <Heart className="inline-block text-red-500" />
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    From our childhood adventures to our grown-up heart-to-hearts, you've been my constant companion and
                    confidante.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    Your strength inspires me, your laughter lifts me, and your love supports me. I'm so grateful to have you as
                    my sister.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-lg mb-4"
                >
                    On this special day, I wish you all the joy, success, and love that you so richly deserve. May this year be
                    your best one yet!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-2xl font-bold mt-8"
                >
                    Love you to the moon and back! 🌙✨
                </motion.p>
            </motion.div>
        </div>
    )
}

