"use client"

import Balloons from "@/components/Balloons"
import { motion } from "framer-motion"
import { Cake } from "lucide-react"
import Link from "next/link"

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center p-4 overflow-hidden">
            <Balloons />
            <motion.div
                className="z-10 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Welcome to Your Birthday Celebration! 🎉
                </h1>
                <p className="text-xl text-white mb-8 drop-shadow-md">
                    Get ready to relive beautiful memories and enjoy a special surprise! ✨
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        href="/cake"
                        className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center shadow-lg"
                    >
                        Birthday Cake <Cake className="ml-2" />
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
