"use client"

import { motion } from "framer-motion"

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]

export default function Balloons() {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
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
                    <div className="w-16 h-20 rounded-full relative" style={{ backgroundColor: colors[i % colors.length] }}>
                        <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gray-300 -translate-x-1/2" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

