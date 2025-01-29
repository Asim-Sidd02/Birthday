"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FloatingHearts() {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                    }}
                    animate={{
                        y: -100,
                        transition: {
                            repeat: Number.POSITIVE_INFINITY,
                            duration: Math.random() * 10 + 20,
                            ease: "linear",
                        },
                    }}
                >
                    <Heart className="text-pink-200 opacity-50" size={Math.random() * 20 + 10} />
                </motion.div>
            ))}
        </div>
    )
}

