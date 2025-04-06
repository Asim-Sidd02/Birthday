import Balloons from ".././components/Balloons"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { MusicProvider } from ".././components/MusicContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Happiest Birthday, Abhaa!",
  description: "A special birthday journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicProvider>
          <Balloons />
          {children}
        </MusicProvider>
      </body>
    </html>
  )
}
