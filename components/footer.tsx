"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Mail, MapPin, Facebook, Twitter, Linkedin, X, Info } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showCookieModal, setShowCookieModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  return (
    <footer className="bg-gradient-blue text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section with Logo and Social */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-4">Alpha Stats Inc</h3>
          <p className="mb-6 text-white/90 max-w-xl mx-auto">
            Specialty CRO providing Biostatistics and Statistical Programming services to the
            pharmaceutical and biotechnology industry.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="hover:text-secondary transition-colors p-2">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors p-2">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors p-2">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-10">
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2" />
                <span>
                  21 Demarest Pl
                  <br />
                  Piscataway, NJ 08854, USA
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 mb-2" />
                <span>info@alphastats.com</span>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowCookieModal(true)}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-8 text-center">
          <p className="text-sm">Copyright © 2010-{currentYear}, Alpha Stats Inc. All rights reserved</p>
        </div>
      </div>

      {/* Cookie Policy Modal */}
      {showCookieModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowCookieModal(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] overflow-auto">
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setShowCookieModal(false);
              }}
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            <Image 
              src="/images/cookie.png" 
              alt="Cookie Policy" 
              width={800} 
              height={600} 
              className="rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Privacy Policy Coming Soon Modal */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-md relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setShowPrivacyModal(false);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="bg-secondary/30 p-4 inline-block rounded-full mb-4">
                <Info className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="mb-4">Our Privacy Policy page is currently under development.</p>
              <p className="text-sm text-gray-600">Thank you for your patience.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Coming Soon Modal */}
      {showTermsModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowTermsModal(false)}
        >
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-md relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setShowTermsModal(false);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="bg-secondary/30 p-4 inline-block rounded-full mb-4">
                <Info className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="mb-4">Our Terms of Service page is currently under development.</p>
              <p className="text-sm text-gray-600">Thank you for your patience.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
} 