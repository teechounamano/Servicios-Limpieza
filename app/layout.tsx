import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TeEchoUnaMano (TUM) - Servicios de Limpieza Profesional",
  description:
    "Elige tus servicios de limpieza profesional con TeEchoUnaMano (TUM). Limpieza de mantenimiento, a fondo, rescate y más. Solicita tu presupuesto por WhatsApp.",
  icons: {
    icon: "https://i.ibb.co/fYNYd9p/ICONO-WEB.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
