"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const images = [
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+1",
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+2",
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+3",
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+4",
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+5",
    "/placeholder.svg?height=400&width=600&text=Sister+and+I+6",
]

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
            <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-2xl aspect-video bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    alt={`Sister and I ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
                >
                    <ChevronLeft className="text-purple-600" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
                >
                    <ChevronRight className="text-purple-600" />
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex space-x-4"
            >
                <Link
                    href="/journey"
                    className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 flex items-center"
                >
                    Memory Lane <Heart className="ml-2 text-pink-500" />
                </Link>
                <Link
                    href="/cake"
                    className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center"
                >
                    Birthday Cake <Heart className="ml-2 text-purple-500" />
                </Link>
            </motion.div>
        </div>
    )
}

