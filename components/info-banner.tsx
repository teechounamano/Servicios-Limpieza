import { Users, Sparkles } from "lucide-react"

export function InfoBanner() {
  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-accent/5 to-primary/5 p-6">
      <h3 className="mb-4 text-lg font-bold text-foreground">Todos nuestros servicios incluyen:</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground">Equipo Profesional</p>
            <p className="text-sm text-foreground-subtle">Dos especialistas capacitados y certificados</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium text-foreground">Materiales Premium</p>
            <p className="text-sm text-foreground-subtle">Productos ecológicos y herramientas profesionales</p>
          </div>
        </div>
      </div>
    </div>
  )
}
