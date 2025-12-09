interface MetricBoxProps {
  number: string
  label: string
}

export default function MetricBox({ number, label }: MetricBoxProps) {
  return (
    <div className="flex-1 border-2 border-black p-4 md:p-8 text-center">
      <p className="font-serif text-3xl sm:text-4xl md:text-6xl mb-2 md:mb-4 tracking-tight">{number}</p>
      <p className="font-sans text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-gray-800 leading-tight">{label}</p>
    </div>
  )
}
