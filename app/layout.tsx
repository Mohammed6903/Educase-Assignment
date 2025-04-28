import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PopX Mobile App",
  description: "A mobile app interface for PopX",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <div className="max-w-md mx-auto bg-gray-50 shadow-lg overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}
