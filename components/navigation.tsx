"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          Bergs & Mark
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/work" className="text-sm font-medium hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="px-6 pb-4 flex flex-col gap-4">
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-sm font-medium hover:text-primary transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
