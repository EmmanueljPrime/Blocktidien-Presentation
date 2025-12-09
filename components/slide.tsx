import type { ReactNode } from "react"

interface SlideProps {
  slide: {
    type: string
    content: ReactNode
    className?: string
  }
}

export default function Slide({ slide }: SlideProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden overflow-x-hidden">
      <div className="w-full h-full max-w-full max-h-full flex flex-col items-center justify-center overflow-x-hidden">
        {slide.content}
      </div>
    </div>
  )
}
