import Balloons from "@/components/Balloons"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Happy Birthday, Sis!",
  description: "A special birthday journey for my amazing sister",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Balloons />
        {children}
      </body>
    </html>
  )
}

