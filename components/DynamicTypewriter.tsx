"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface DynamicTypewriterProps {
  messages: string[]
  typingSpeed?: number
  delayBeforeStart?: number
  delayAfterMessage?: number
}

const colors = [
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-red-400",
  "text-purple-400",
  "text-pink-400",
  "text-indigo-400",
  "text-teal-400",
]

const DynamicTypewriter: React.FC<DynamicTypewriterProps> = ({
  messages,
  typingSpeed = 25,
  delayBeforeStart = 1000,
  delayAfterMessage = 2000,
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 200)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const typeNextChar = () => {
      if (currentCharIndex < messages[currentMessageIndex].length) {
        setDisplayText((prev) => prev + messages[currentMessageIndex][currentCharIndex])
        setCurrentCharIndex((prev) => prev + 1)
      } else {
        // Message complete, wait and move to next message
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
          setCurrentColorIndex((prev) => (prev + 1) % colors.length)
          setCurrentCharIndex(0)
          setDisplayText("")
        }, delayAfterMessage)
      }
    }

    const timer = setTimeout(
      () => {
        typeNextChar()
      },
      currentCharIndex === 0 ? delayBeforeStart : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentMessageIndex, currentCharIndex, messages, typingSpeed, delayBeforeStart, delayAfterMessage])

  return (
    <h1 className={`text-2xl md:text-4xl font-bold max-w-2xl mx-auto ${colors[currentColorIndex]}`} aria-live="polite">
      {displayText}
      <span
        className={`inline-block w-0.5 h-6 md:h-8 bg-current ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      ></span>
    </h1>
  )
}

export default DynamicTypewriter

