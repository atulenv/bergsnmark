import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bergs & Mark | Digital Marketing Agency & IT Solutions",
  description:
    "Bergs & Mark is a leading digital marketing agency and IT solutions firm. We are a team of passionate digital marketers, designers, and developers who are dedicated to helping our clients achieve their business goals. We offer a wide range of services, including SEO, PPC, social media marketing, content marketing, web design and development, and more. We are committed to providing our clients with the best possible results, and we are proud to have a proven track record of success. Contact us today to learn more about how we can help you grow your business.",
  keywords: ["marketing agency", "agency", "digital marketing", "service providers", "it firm", "it solution firms", "seo", "ppc", "social media marketing", "content marketing", "web design", "web development"],
  openGraph: {
    title: "Bergs & Mark | Digital Marketing Agency & IT Solutions",
    description:
      "Bergs & Mark is a leading digital marketing agency and IT solutions firm. We help businesses grow online with our proven strategies and custom solutions.",
    url: "https://bergsnmark.com",
    siteName: "Bergs & Mark",
    images: [
      {
        url: "https://bergsnmark.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergs & Mark | Digital Marketing Agency & IT Solutions",
    description:
      "Bergs & Mark is a leading digital marketing agency and IT solutions firm. We help businesses grow online with our proven strategies and custom solutions.",
    creator: "@bergsnmark",
    images: ["https://bergsnmark.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
