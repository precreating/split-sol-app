"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
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
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/app" className="text-sm font-medium transition-colors hover:text-primary">
              App
            </Link>
            <Link href="https://docs.split.sol" className="text-sm font-medium transition-colors hover:text-primary">
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex md:gap-2">
            <ModeToggle />
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/app"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              App
            </Link>
            <Link
              href="https://docs.split.sol"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="flex items-center gap-2 pt-2">
              <ModeToggle />
              <Link href="/app" onClick={() => setIsMenuOpen(false)}>
                <Button>Launch App</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
