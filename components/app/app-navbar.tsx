"use client"

import Link from "next/link"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 overflow-hidden">
              <img src="/icons/icon-192x192.png" alt="Split.sol Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-bold text-primary">Split.sol</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-2 md:flex">
            <ModeToggle />
            <WalletConnectButton />
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <div className="flex items-center gap-2 pt-2">
              <ModeToggle />
              <WalletConnectButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
