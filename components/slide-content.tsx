import type { ReactNode } from "react"

interface SlideContentProps {
  children: ReactNode
  className?: string
}

export default function SlideContent({ children, className = "" }: SlideContentProps) {
  return <div className={`w-full max-w-5xl mx-auto px-6 md:px-16 pb-12 md:pb-24 ${className}`}>{children}</div>
}
