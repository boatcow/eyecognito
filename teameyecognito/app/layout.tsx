import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Team Eyecognito",
  description: "We like to build stuff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-bold">
              Team Eyecognito
            </Link>
            <div>
              <Link href="/" className="text-white mr-4 hover:text-gray-300">
                Home
              </Link>
              <Link href="/llm-agents-hackathon" className="text-white hover:text-gray-300">
                LLM Agents Hackathon
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  )
}

