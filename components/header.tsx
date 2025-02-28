"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center text-white mr-2">
              A
            </div>
            Alpha Stats Inc
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              HOME
            </Link>

            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              ABOUT US
            </Link>

            <Link href="/team" className="font-medium hover:text-primary transition-colors">
              TEAM
            </Link>

            <Link href="/services" className="font-medium hover:text-primary transition-colors">
              SERVICES
            </Link>

            <Link href="/careers" className="font-medium hover:text-primary transition-colors">
              CAREERS
            </Link>

            <Button asChild variant="default" className="bg-gradient-blue hover:opacity-90 transition-opacity">
              <Link href="/contact" className="font-medium">
                CONTACT US
              </Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>

            <Link
              href="/about"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>

            <Link
              href="/team"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              TEAM
            </Link>

            <Link
              href="/services"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>

            <Link
              href="/careers"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              CAREERS
            </Link>

            <Link href="/contact" className="block py-2 font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
              CONTACT US
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 