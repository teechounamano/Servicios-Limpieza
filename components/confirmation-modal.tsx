"use client"

import { X } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  selectedServices: Service[]
}

export function ConfirmationModal({ isOpen, onClose, onConfirm, selectedServices }: ConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-md rounded-2xl bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Confirmar Solicitud</h2>
            <p className="mt-1 text-sm text-foreground-muted">Revisa los servicios seleccionados</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-foreground-subtle transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {selectedServices.length > 0 ? (
          <>
            <div className="mb-6 rounded-lg bg-surface p-4">
              <p className="mb-3 text-sm font-medium text-foreground-muted">Servicios seleccionados:</p>
              <ul className="space-y-2">
                {selectedServices.map((service, index) => (
                  <li key={service.id} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{service.title}</p>
                      <p className="text-sm text-foreground-subtle">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 rounded-lg border border-border bg-accent/5 p-4">
              <p className="text-sm text-foreground-muted">
                Al confirmar, se abrirá WhatsApp con tu solicitud pre-escrita. Nuestro equipo te responderá con un
                presupuesto personalizado en menos de 24 horas.
              </p>
            </div>
          </>
        ) : (
          <div className="mb-6 rounded-lg bg-surface p-4">
            <p className="text-sm text-foreground-muted">
              No has seleccionado ningún servicio específico. Se enviará una solicitud general de información.
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 font-medium text-foreground transition-colors hover:bg-surface"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
