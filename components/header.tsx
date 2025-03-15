"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
            <Image src="/logo.svg" alt="ClinPharmStats Logo" width={40} height={40} className="mr-2" />
            ClinPharmStats
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

            <Link href="/scholarship" className="font-medium hover:text-primary transition-colors">
              SCHOLARSHIP
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
          <div
            className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center space-y-6 p-4">
              <Link
                href="/"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
              <Link
                href="/team"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                TEAM
              </Link>
              <Link
                href="/services"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                SERVICES
              </Link>
              <Link
                href="/scholarship"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                SCHOLARSHIP
              </Link>
              <Link
                href="/careers"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                CAREERS
              </Link>
              <Link href="/contact" className="text-xl font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 