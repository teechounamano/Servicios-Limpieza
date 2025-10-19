import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="https://i.ibb.co/fYNYd9p/ICONO-WEB.png"
              alt="TeEchoUnaMano Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">TeEchoUnaMano</h2>
            <p className="text-xs text-foreground-subtle">Servicios de Limpieza Profesional</p>
          </div>
        </div>

        <a
          href="https://te-echounamano.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium text-foreground-muted transition-colors hover:text-foreground sm:block"
        >
          Más información
        </a>
      </div>
    </header>
  )
}
