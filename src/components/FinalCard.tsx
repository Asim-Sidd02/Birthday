"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FinalCard() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => setIsOpen(!isOpen)

    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <motion.div
                className="bg-white rounded-lg shadow-xl overflow-hidden"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: "60px", opacity: 1 }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <button
                    onClick={toggleCard}
                    className="w-full p-4 text-left text-lg font-semibold text-purple-600 flex items-center justify-between"
                >
                    <span>A Special Message for You</span>
                    <motion.span
                        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        ▼
                    </motion.span>
                </button>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                >
                    <img
                        src="/placeholder.svg?height=300&width=400&text=Sister+and+I"
                        alt="Sister and I"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-800 mb-2">My dearest sister,</p>
                    <p className="text-gray-800 mb-2">
                        Words cannot express how much you mean to me. You've been my rock, my confidante, and my best friend through all of life's ups and downs.
                    </p>
                    <p className="text-gray-800 mb-2">
                        Your strength inspires me, your laughter brightens my darkest days, and your love gives me the courage to face any challenge.
                    </p>
                    <p className="text-gray-800 mb-4">
                        On this special day, I wish you all the happiness, success, and love that you so richly deserve. May this year be filled with wonderful adventures and beautiful memories.
                    </p>
                    <p className="text-gray-800 font-semibold">
                        Happy Birthday, sis! I love you more than words can say. <Heart className="inline text-red-500" />
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}
