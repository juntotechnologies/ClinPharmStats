"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium hover:text-primary flex items-center gap-1 p-0">
                  ABOUT US <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/about" className="w-full">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/ex-ceo-profile" className="w-full">
                    Ex-CEO Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/clinical-experience" className="w-full">
                    Clinical Experience
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/mission-vision" className="w-full">
                    Mission & Vision
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/why-alpha-stats" className="w-full">
                    Why Alpha Stats
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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

            <div className="py-2">
              <div className="font-medium mb-2">ABOUT US</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/about"
                  className="block py-1 text-sm hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/about/ex-ceo-profile"
                  className="block py-1 text-sm hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ex-CEO Profile
                </Link>
                <Link
                  href="/about/clinical-experience"
                  className="block py-1 text-sm hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clinical Experience
                </Link>
                <Link
                  href="/about/mission-vision"
                  className="block py-1 text-sm hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/about/why-alpha-stats"
                  className="block py-1 text-sm hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Alpha Stats
                </Link>
              </div>
            </div>

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

