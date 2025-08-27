// app/layout.tsx
import type { Metadata } from "next"
import "./global.css"
import { ToastProvider } from "@/components/providers/ToastProvider"

export const metadata: Metadata = {
  title: "Entretods - Gestión de Gastos de Viaje",
  description: "Aplicación colaborativa para gestionar gastos de viaje entre amigos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
