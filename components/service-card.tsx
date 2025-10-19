"use client"

import { Check } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  popular?: boolean
}

interface ServiceCardProps {
  service: Service
  isSelected: boolean
  onToggle: () => void
}

export function ServiceCard({ service, isSelected, onToggle }: ServiceCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`group relative flex flex-col rounded-xl border-2 p-6 text-left transition-all hover:shadow-lg ${
        isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border bg-background hover:border-border-hover"
      }`}
      aria-pressed={isSelected}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Más Popular
          </span>
        </div>
      )}

      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-2xl">{service.icon}</div>

        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
            isSelected ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"
          }`}
        >
          {isSelected && <Check className="h-4 w-4 text-white" />}
        </div>
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>

      <p className="mb-4 text-sm text-foreground-muted">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground-subtle">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </button>
  )
}
