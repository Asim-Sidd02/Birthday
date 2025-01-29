"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const memories = [
    { image: "/placeholder.svg?height=600&width=800&text=Sister+1", caption: "From our first steps together..." },
    { image: "/placeholder.svg?height=600&width=800&text=Sister+2", caption: "Through all our adventures..." },
    { image: "/placeholder.svg?height=600&width=800&text=Sister+3", caption: "The laughter we've shared..." },
    { image: "/placeholder.svg?height=600&width=800&text=Sister+4", caption: "The challenges we've overcome..." },
    { image: "/placeholder.svg?height=600&width=800&text=Sister+5", caption: "To the women we've become..." },
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
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
            >
                <img
                    src={memories[currentIndex].image || "/placeholder.svg"}
                    alt={`Memory ${currentIndex + 1}`}
                    className="w-full h-80 object-cover rounded-lg shadow-xl mb-4"
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
                            className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center shadow-lg"
                        >
                            Birthday Cake <ChevronRight className="ml-2" />
                        </Link>
                    ) : (
                        <button
                            onClick={nextMemory}
                            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 flex items-center shadow-lg"
                        >
                            Next <ChevronRight className="ml-2" />
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

