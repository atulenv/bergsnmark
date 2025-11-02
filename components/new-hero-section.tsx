"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function NewHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 pattern-dots opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Digital Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight"
            >
              We Build Digital Presence That Converts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed max-w-lg"
            >
              Custom websites, Instagram growth, paid ads, complete campaigns. We handle everything digital so you can
              focus on building your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 bg-transparent">
                <Link href="/work">View Our Work</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">50+</div>
                <p className="text-sm font-medium text-foreground/70">Brands Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">$20M+</div>
                <p className="text-sm font-medium text-foreground/70">Revenue Generated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">98%</div>
                <p className="text-sm font-medium text-foreground/70">Client Retention</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="space-y-4">
              {/* Main image */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/professional-team-working-on-laptop-in-modern-offi.jpg" alt="Team working" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5 }} className="bg-white/95 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                  <p className="text-xs text-foreground/60 font-semibold mb-1">Instagram Growth</p>
                  <p className="text-3xl font-black text-foreground">300%</p>
                  <p className="text-xs text-foreground/50">Average for clients</p>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} className="bg-white/95 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                  <p className="text-xs text-foreground/60 font-semibold mb-1">Conversion Rate</p>
                  <p className="text-3xl font-black text-foreground">6.2%</p>
                  <p className="text-xs text-foreground/50">Industry average: 2%</p>
                </motion.div>
              </div>

              {/* Feature highlight */}
              <motion.div whileHover={{ scale: 1.02 }} className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <p className="text-sm font-semibold text-accent mb-2">Why Clients Choose Us</p>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>✓ Complete digital solution, one partner</li>
                  <li>✓ Proven track record with measurable results</li>
                  <li>✓ Transparent reporting & communication</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
