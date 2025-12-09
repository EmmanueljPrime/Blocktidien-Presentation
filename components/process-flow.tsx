interface Step {
  icon: string
  label: string
  description: string
  color: string
}

interface ProcessFlowProps {
  steps: Step[]
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Number Box */}
          <div
            className={`w-16 h-16 md:w-20 md:h-20 ${step.color} flex items-center justify-center font-serif text-xl md:text-2xl mb-4 md:mb-6`}
          >
            {step.icon}
          </div>
          <p className="font-serif text-base md:text-xl lg:text-2xl mb-1 md:mb-2 uppercase tracking-wide">{step.label}</p>
          <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
