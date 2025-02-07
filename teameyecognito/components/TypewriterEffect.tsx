"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  typingSpeed?: number
  delayBeforeStart?: number
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, typingSpeed = 150, delayBeforeStart = 1000 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      currentIndex === 0 ? delayBeforeStart : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, delayBeforeStart, text, typingSpeed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <h1 className="text-4xl md:text-6xl font-bold" aria-label={text}>
      {displayText}
      <span
        className={`inline-block w-0.5 h-8 md:h-12 bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      ></span>
    </h1>
  )
}

export default TypewriterEffect

