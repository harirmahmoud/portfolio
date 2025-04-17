"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/AnimatedText.css"

function AnimatedText({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex]

      if (isWaiting) {
        timerRef.current = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, delayBetween)
        return
      }

      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1))

        if (displayText.length === 1) {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1))

        if (displayText.length === currentText.length) {
          setIsWaiting(true)
        }
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    timerRef.current = setTimeout(handleTyping, speed)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [currentTextIndex, displayText, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <div className="animated-text">
      <span>{displayText}</span>
      <span className="cursor"></span>
    </div>
  )
}

export default AnimatedText
