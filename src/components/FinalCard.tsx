"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"

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
                    <Heart className="text-white w-16 h-16 mb-4" />
                    <p className="text-xl text-white text-center">Click to open your special birthday message</p>
                </motion.div>

                {/* Card Back */}
                <motion.div
                    className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl p-8 overflow-y-auto [transform:rotateY(180deg)]"
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src="/A.webp"
                        alt="Ayesha"
                        width={1000}
                        height={1000}
                        className="w-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">Happy Birthday Dear Ayesha!</h3>
                    <p className="text-gray-800 mb-2">
                        Wishing you a day filled with happiness, laughter, and all the good things life has to offer. ✨ May this year bring you success, joy, and moments that make your heart smile.
                    </p>
                    <p className="text-gray-800 mb-2">
                        You deserve all the happiness in the world! Keep shining, keep smiling, and may every day ahead be as amazing as you are. 💖
                    </p>
                    <p className="text-gray-800 mb-4">
                        May this new year of your life be full of exciting opportunities, beautiful memories, and dreams coming true. Keep being your incredible self!
                    </p>
                    <p className="text-gray-800 font-semibold">
                        Happy Birthday! 🥳🎂 Wishing you all the best today and always. Enjoy your special day to the fullest! 💕 <Heart className="inline text-red-500" />
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

