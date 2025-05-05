import type React from "react"
import "./globals.css"
import { Montserrat, Libre_Baskerville, Open_Sans } from "next/font/google"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition-final"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
})

// Replace local Baskerville with Google Font version
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
  weight: ["400", "700"],
})

// Add Open Sans configuration
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Zach Saul - UX Designer & Strategist",
  description:
    "Portfolio of Zach Saul, Senior Product Designer & UX Strategist helping businesses solve problems and build effective products.",
  keywords: ["UX Design", "Product Design", "Healthcare", "Data Quality", "Portfolio"],
  authors: [{ name: "Zach Saul" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zachsaul.com/",
    title: "Zach Saul - UX Designer & Strategist",
    description: "Portfolio of Zach Saul, Senior Product Designer & UX Strategist",
    siteName: "Zach Saul Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} ${baskerville.variable} ${openSans.variable} min-h-screen flex flex-col`}
      >
        <Navigation />
        <PageTransition>
          <div className="flex-1 flex flex-col">{children}</div>
        </PageTransition>
      </body>
    </html>
  )
}
