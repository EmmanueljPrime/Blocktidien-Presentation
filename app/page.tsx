"use client"

import { useState, useEffect } from "react"
import Slide from "@/components/slide"
import Navigation from "@/components/navigation"
import slides from "@/data/slides"

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [current, isAutoPlay])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const handleDot = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden overflow-x-hidden">
      <Slide slide={slides[current]} />
      <Navigation
        current={current}
        total={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onDot={handleDot}
        isAutoPlay={isAutoPlay}
        onAutoPlayToggle={() => setIsAutoPlay(!isAutoPlay)}
      />
    </main>
  )
}
