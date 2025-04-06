"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Gift, PocketKnifeIcon as Knife } from "lucide-react"
import Link from "next/link"
import { useMusic } from "../../components/MusicContext"

export default function Cake() {
  const [candlesLit, setCandlesLit] = useState(true)
  const [isCutting, setIsCutting] = useState(false)
  const [isCakeCut, setIsCakeCut] = useState(false)

  const { playMusic } = useMusic()

  const blowOutCandles = () => {
    setCandlesLit(false)
    playMusic() // 👈 plays globally
  }

  const cutCake = () => {
    setIsCutting(true)
    setTimeout(() => {
      setIsCutting(false)
      setIsCakeCut(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-16 drop-shadow-lg">Make a Wish!</h1>

        {/* Cake Display */}
        <div className="cake mb-8 relative">
          <div className="plate"></div>
          <div className="layer layer-bottom"></div>
          <div className="layer layer-middle"></div>
          <div className="layer layer-top"></div>
          <div className="icing"></div>
          <div className="drip drip1"></div>
          <div className="drip drip2"></div>
          <div className="drip drip3"></div>

          {/* Candles */}
          {candlesLit && (
            <div className="absolute top-[-20px] left-1/2 flex gap-4 -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="candle">
                  <div className="flame"></div>
                </div>
              ))}
            </div>
          )}

          {/* Cutting Knife Animation */}
          {isCutting && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, -45, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <Knife size={48} className="text-white" />
            </motion.div>
          )}

          {/* Cake Cut Effect */}
          {isCakeCut && (
            <div className="absolute top-1/2 left-1/2 w-5/6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-12 shadow-md"></div>
          )}
        </div>

        {/* Buttons */}
        {candlesLit ? (
          <button
            onClick={blowOutCandles}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 shadow-lg mb-4"
          >
            Blow Out the Candles
          </button>
        ) : isCakeCut ? (
          <p className="text-xl text-white mb-4 drop-shadow-md">Enjoy your cake! 🍰</p>
        ) : (
          <button
            onClick={cutCake}
            disabled={isCutting}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300 shadow-lg mb-4 disabled:opacity-50"
          >
            {isCutting ? "Cutting..." : "Cut the Cake"}
          </button>
        )}

        {/* Link to Birthday Message */}
        {isCakeCut && (
          <Link
            href="/wish"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-100 transition duration-300 flex items-center justify-center shadow-lg"
          >
            Open Your Birthday Message <Gift className="ml-2" />
          </Link>
        )}
      </motion.div>
    </div>
  )
}
