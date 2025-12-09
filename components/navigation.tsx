"use client"

interface NavigationProps {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
  onDot: (index: number) => void
  isAutoPlay: boolean
  onAutoPlayToggle: () => void
}

export default function Navigation({
  current,
  total,
  onNext,
  onPrev,
  onDot,
  isAutoPlay,
  onAutoPlayToggle,
}: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Slide Counter */}
        <div className="text-sm font-serif tracking-wide text-gray-600">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-3">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onDot(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-black w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={onAutoPlayToggle}
            className="text-xs font-sans uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
            title={isAutoPlay ? "Pause" : "Play"}
          >
            {isAutoPlay ? "⏸" : "▶"}
          </button>
          <button
            onClick={onPrev}
            className="text-xl text-gray-600 hover:text-black transition-colors"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={onNext}
            className="text-xl text-gray-600 hover:text-black transition-colors"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
