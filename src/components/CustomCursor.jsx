"use client"

import { useEffect, useState } from "react"
import "../styles/CustomCursor.css"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      const clickableElements = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"]
      setIsPointer(hoveredElement && clickableElements.includes(hoveredElement.tagName))
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateCursorType)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateCursorType)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position])

  return (
    <>
      <div
        className={`cursor-dot ${isPointer ? "pointer" : ""} ${isHidden ? "hidden" : ""} ${
          isClicking ? "clicking" : ""
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className={`cursor-outline ${isPointer ? "pointer" : ""} ${isHidden ? "hidden" : ""} ${
          isClicking ? "clicking" : ""
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  )
}

export default CustomCursor
