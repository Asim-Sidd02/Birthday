"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Gift } from "lucide-react"
import { useState } from "react"

export default function Cake() {
    const [candlesLit, setCandlesLit] = useState(true)

    const blowOutCandles = () => {
        setCandlesLit(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 overflow-hidden">
            <motion.div
                className="z-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Make a Wish!</h1>
                <div className="cake mb-8">
                    <div className="plate"></div>
                    <div className="layer layer-bottom"></div>
                    <div className="layer layer-middle"></div>
                    <div className="layer layer-top"></div>
                    <div className="icing"></div>
                    <div className="drip drip1"></div>
                    <div className="drip drip2"></div>
                    <div className="drip drip3"></div>
                    {candlesLit && (
                        <>
                            <div className="candle">
                                <div className="flame"></div>
                            </div>
                            <div className="candle">
                                <div className="flame"></div>
                            </div>
                            <div className="candle">
                                <div className="flame"></div>
                            </div>
                        </>
                    )}
                </div>
                {candlesLit ? (
                    <button
                        onClick={blowOutCandles}
                        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 shadow-lg mb-4"
                    >
                        Blow Out the Candles
                    </button>
                ) : (
                    <p className="text-xl text-white mb-4 drop-shadow-md">Your wish has been made! 🎉</p>
                )}
                <Link
                    href="/wish"
                    className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center justify-center shadow-lg"
                >
                    Open Your Birthday Message <Gift className="ml-2" />
                </Link>
            </motion.div>
        </div>
    )
}

