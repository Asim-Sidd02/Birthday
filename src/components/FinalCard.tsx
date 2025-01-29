"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FinalCard() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => setIsOpen(!isOpen)

    return (
        <div className="w-full max-w-md mx-auto mt-8 perspective">
            <motion.div
                className="w-full h-[500px] [transform-style:preserve-3d] cursor-pointer"
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                onClick={toggleCard}
            >
                {/* Card Front */}
                <motion.div
                    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl shadow-xl flex flex-col items-center justify-center p-8"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">For My Dear Sister</h2>
                    <Heart className="text-white w-16 h-16 mb-4" />
                    <p className="text-xl text-white text-center">Click to open your special birthday message</p>
                </motion.div>

                {/* Card Back */}
                <motion.div
                    className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl p-8 overflow-y-auto [transform:rotateY(180deg)]"
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src="/placeholder.svg?height=200&width=350&text=Sister+and+I"
                        alt="Sister and I"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">Happy Birthday, Sis!</h3>
                    <p className="text-gray-800 mb-2">My dearest sister,</p>
                    <p className="text-gray-800 mb-2">
                        As I write this, I'm filled with an overwhelming sense of gratitude for having you in my life. You're not
                        just my sister; you're my best friend, my confidante, and my partner in crime.
                    </p>
                    <p className="text-gray-800 mb-2">
                        Remember when we used to build pillow forts and dream of adventures? Well, look at us now – we're living
                        those adventures, supporting each other through thick and thin, and creating memories that will last a
                        lifetime.
                    </p>
                    <p className="text-gray-800 mb-2">
                        Your strength in facing challenges, your infectious laughter that brightens the darkest days, and your
                        unwavering love have been my constant inspiration. You've taught me so much about resilience, kindness, and
                        the true meaning of sisterhood.
                    </p>
                    <p className="text-gray-800 mb-4">
                        On this special day, I wish you all the happiness, success, and love that you so richly deserve. May this
                        year bring you exciting opportunities, beautiful moments, and dreams fulfilled. I'll be right here, cheering
                        you on every step of the way.
                    </p>
                    <p className="text-gray-800 font-semibold">
                        Happy Birthday, sis! Here's to another year of laughter, love, and unforgettable memories. I love you more
                        than words can express. <Heart className="inline text-red-500" />
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

