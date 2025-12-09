interface TechCardProps {
  icon: string
  title: string
  description: string
}

export default function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="bg-white border-l-4 border-black pl-6 py-6 hover:border-l-8 transition-all duration-300">
      <div className="font-serif text-sm mb-3 text-gray-600 tracking-widest">{icon}</div>
      <h3 className="font-serif text-2xl mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  )
}
