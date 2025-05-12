"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, PlusCircle, Settings, HelpCircle, Users, CreditCard } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/app",
    icon: Home,
  },
  {
    title: "My Vaults",
    href: "/app/vaults",
    icon: CreditCard,
  },
  {
    title: "Friends",
    href: "/app/friends",
    icon: Users,
  },
  {
    title: "Create Vault",
    href: "/app/create",
    icon: PlusCircle,
  },
  {
    title: "Settings",
    href: "/app/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/app/help",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 border-r md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <nav className="grid gap-1 px-2 py-3">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
