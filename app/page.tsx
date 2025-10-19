"use client"

import { useState } from "react"
import { ServiceCard } from "@/components/service-card"
import { ConfirmationModal } from "@/components/confirmation-modal"
import { Header } from "@/components/header"
import { InfoBanner } from "@/components/info-banner"
import { Sparkles, CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "mantenimiento",
    title: "Limpieza de Mantenimiento",
    description: "Mantén tu hogar impecable sin esfuerzo",
    features: [
      "Frecuencia flexible: diaria, semanal o quincenal",
      "Equipo profesional de dos especialistas",
      "Productos ecológicos de alta calidad incluidos",
      "Herramientas profesionales especializadas",
    ],
    icon: "✨",
    popular: true,
  },
  {
    id: "fondo",
    title: "Limpieza a Fondo",
    description: "Recupera el brillo original de tu hogar",
    features: [
      "Atención especial a cocina y baños",
      "Eliminación de suciedad acumulada",
      "Limpieza intensiva de cada rincón",
      "Desinfección profunda garantizada",
    ],
    icon: "🏠",
  },
  {
    id: "rescate",
    title: "Limpieza de Rescate",
    description: "Transformamos espacios descuidados",
    features: [
      "Ideal para propiedades de alquiler",
      "Saneamiento completo y profundo",
      "Recuperación de espacios extremos",
      "Resultados visibles inmediatos",
    ],
    icon: "🚀",
  },
  {
    id: "tarea",
    title: "Limpieza por Tarea",
    description: "Soluciones específicas a tu medida",
    features: [
      "Enfoque en áreas específicas",
      "Cocina, baño o electrodomésticos",
      "Solución rápida y eficiente",
      "Precio ajustado a tus necesidades",
    ],
    icon: "🎯",
  },
  {
    id: "cristales",
    title: "Limpieza de Cristales",
    description: "Vistas cristalinas, hogar luminoso",
    features: [
      "Ventanas, persianas y mosquiteras",
      "Limpieza de rieles y marcos",
      "Acabado profesional sin marcas",
      "Mayor luminosidad garantizada",
    ],
    icon: "💎",
  },
]

export default function Home() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["mantenimiento"])
  const [showModal, setShowModal] = useState(false)

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSendRequest = () => {
    setShowModal(true)
  }

  const handleConfirm = () => {
    const phoneNumber = "34602846694"
    const selectedServiceNames = services.filter((s) => selectedServices.includes(s.id)).map((s) => s.title)

    const message =
      selectedServiceNames.length > 0
        ? `Hola, me gustaría solicitar los siguientes servicios de limpieza con TeEchoUnaMano (TUM):\n\n${selectedServiceNames
            .map((name, index) => `${index + 1}. ${name}`)
            .join("\n")}\n\nMe gustaría coordinar una visita para recibir un presupuesto personalizado. ¡Gracias!`
        : "Hola, me gustaría solicitar información sobre los servicios de limpieza de TeEchoUnaMano (TUM). Me gustaría coordinar una visita para recibir un presupuesto personalizado."

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setShowModal(false)
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Servicio Profesional de Limpieza</span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Selecciona tu Servicio de Limpieza
          </h1>

          <p className="mx-auto mb-2 max-w-2xl text-pretty text-lg text-foreground-muted sm:text-xl">
            Elige el servicio que mejor se adapte a tus necesidades. Nuestro equipo profesional está listo para
            transformar tu hogar.
          </p>

          <p className="text-sm text-foreground-subtle">
            Presupuesto personalizado sin compromiso •{" "}
            <a
              href="https://te-echounamano.blogspot.com"
              className="font-medium text-primary hover:text-primary-hover hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              TeEchoUnaMano (TUM)
            </a>
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.includes(service.id)}
              onToggle={() => toggleService(service.id)}
            />
          ))}
        </div>

        {/* Info Banner */}
        <InfoBanner />

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSendRequest}
            className="group inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Solicitar Presupuesto por WhatsApp</span>
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground-subtle">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span>Respuesta en menos de 24 horas</span>
          </div>
        </div>
      </main>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
        selectedServices={services.filter((s) => selectedServices.includes(s.id))}
      />
    </div>
  )
}
