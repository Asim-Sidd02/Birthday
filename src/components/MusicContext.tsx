// app/context/MusicContext.tsx or components/MusicContext.tsx
"use client"
import { createContext, useContext, useRef } from "react"

const MusicContext = createContext<{ playMusic: () => void } | undefined>(undefined)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <MusicContext.Provider value={{ playMusic }}>
      <audio ref={audioRef} src="/one.mp3" preload="auto" loop />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider")
  }
  return context
}
