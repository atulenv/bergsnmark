"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#strategy" className="hover:opacity-75">
                  Strategy & Positioning
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:opacity-75">
                  Design & Creative
                </Link>
              </li>
              <li>
                <Link href="/services#growth" className="hover:opacity-75">
                  Digital Growth
                </Link>
              </li>
              <li>
                <Link href="/services#conversion" className="hover:opacity-75">
                  Conversion Architecture
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-75">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:opacity-75">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-75">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Contact</h3>
            <p className="text-sm">hello@bergsmark.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-center">
          <p>&copy; 2025 Bergs & Mark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
