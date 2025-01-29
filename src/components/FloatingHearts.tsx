"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FloatingHearts() {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => {
                const x = Math.random() * window.innerWidth // position on x-axis
                const y = window.innerHeight + 100 // start from below the screen
                const size = Math.random() * 20 + 10 // random size of hearts
                const duration = Math.random() * 10 + 20 // random floating duration

                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ x, y }}
                        animate={{
                            y: -100, // float upwards
                            transition: {
                                repeat: Infinity,
                                duration,
                                ease: "linear",
                            },
                        }}
                    >
                        <Heart className="text-pink-200 opacity-50" size={size} />
                    </motion.div>
                )
            })}
        </div>
    )
}
