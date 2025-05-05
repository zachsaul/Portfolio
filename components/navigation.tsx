"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { SignatureLogo } from "./icons/SignatureLogo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ContactModal from "./contact-modal"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  // Determine if we're on the homepage or case study page
  const isHomePage = pathname === "/"
  const isCaseStudy = pathname === "/case-study" || pathname.includes("/case-study")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Function to handle smooth scrolling to sections (only for case study page)
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
    }
  }

  // Function to open contact modal
  const openContactModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsContactModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  // Function to close contact modal
  const closeContactModal = () => {
    setIsContactModalOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo - clickable to go to homepage */}
              <Link href="/" className="h-13 text-black">
                <SignatureLogo />
              </Link>
            </div>

            {/* Middle navigation - contextual based on current page */}
            <div className="hidden md:flex items-center space-x-8">
              {isHomePage && (
                <Link href="/case-study" className="text-gray-800 hover:text-primary font-medium">
                  Data Quality Tool
                </Link>
              )}

              {isCaseStudy && (
                <>
                  <button
                    onClick={scrollToSection("solution")}
                    className="text-gray-800 hover:text-primary font-medium"
                  >
                    Solution
                  </button>
                  <button
                    onClick={scrollToSection("results-recommendations")}
                    className="text-gray-800 hover:text-primary font-medium"
                  >
                    Results & Recommendations
                  </button>
                </>
              )}
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-4">
              <Link
                href="/about"
                className="text-gray-800 hover:text-primary font-medium text-[0.9em] tracking-[0.4em]"
              >
                ABOUT
              </Link>
              <button
                onClick={openContactModal}
                className="px-4 py-2 rounded-[10px] bg-black text-white font-medium hover:bg-gray-800 transition-colors text-[0.9em] tracking-[0.4em]"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  )
}
