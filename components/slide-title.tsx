interface SlideTitleProps {
  title: string
  subtitle?: string
  accent?: string
}

export default function SlideTitle({ title, subtitle, accent }: SlideTitleProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-16 text-center">
      {accent && (
        <div className="mb-12">
          <div className="w-24 h-px bg-black mx-auto mb-6" />
          <p className="text-xs lg:text-sm font-sans uppercase tracking-[0.3em] text-gray-800">{accent}</p>
          <div className="w-24 h-px bg-black mx-auto mt-6" />
        </div>
      )}
      <h1 className="font-serif text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight">{title}</h1>
      {subtitle && <p className="text-lg lg:text-xl font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed tracking-wide">{subtitle}</p>}
    </div>
  )
}
