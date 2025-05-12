import type React from "react"
import { AppNavbar } from "@/components/app/app-navbar"
import { AppSidebar } from "@/components/app/app-sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppNavbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
