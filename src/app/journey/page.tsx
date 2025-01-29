"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const memories = [
    { image: "/A1.png", caption: "Happy Birthday to the most amazing sister! 🎉" },
    { image: "/A2.png", caption: "To my dearest sister, on your special day, I just want to remind you how much you mean to me." },
    { image: "/A3.png", caption: "Happy Birthday, sis! 🎉 Another year older, wiser, and even more fabulous! 😎" },
    { image: "/A4.png", caption: "I’m so lucky to have a sister who’s as fun" },
    { image: "/A7.png", caption: "To my incredible sister, your strength, determination, and kindness inspire me every single day" },
    { image: "/A6.png", caption: " Let’s make this year unforgettable! 🥳💖" },
]

export default function Journey() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextMemory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length)
    }

    const prevMemory = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + memories.length) % memories.length)
    }

    return (
        <div className="md:h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full rounded-xl p-8 shadow-2xl"
            >
                <Image
                    src={memories[currentIndex].image || "/placeholder.svg"}
                    alt={`Memory ${currentIndex + 1}`}
                    width={1300}
                    height={1300}
                    className="w-full h-[550px] object-scale-down rounded-lg shadow-xl mb-4"
                />
                <p className="text-white text-xl text-center mb-8 drop-shadow-md">{memories[currentIndex].caption}</p>
                <div className="flex justify-between">
                    <button
                        onClick={prevMemory}
                        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 flex items-center shadow-lg"
                    >
                        <ChevronLeft className="mr-2" /> Previous
                    </button>
                    {currentIndex === memories.length - 1 ? (
                        <Link
                            href="/cake"
                            className="bg-white text-pink-600 md:px-6 px-4 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center shadow-lg"
                        >
                            Birthday Cake <ChevronRight className="ml-2" />
                        </Link>
                    ) : (
                        <button
                            onClick={nextMemory}
                            className="bg-white text-purple-600 md:px-6 px-4 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 flex items-center shadow-lg"
                        >
                            Next <ChevronRight className="ml-2" />
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

