"use client"

import { useState, useEffect } from "react"

export default function AnimatedFooter() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Function to check if we're at the bottom of the page
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.body.offsetHeight
      const distanceFromBottom = pageHeight - scrollPosition

      // Use a small threshold to trigger the animation slightly before reaching the absolute bottom
      const isAtBottom = distanceFromBottom < 50

      if (isAtBottom !== isExpanded) {
        setIsExpanded(isAtBottom)

        // If we're collapsing, hide content immediately
        if (!isAtBottom) {
          setShowContent(false)
        } else {
          // If we're expanding, wait for the width animation to complete
          setTimeout(() => setShowContent(true), 600)
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isExpanded])

  // Define the bar segments configuration once to ensure consistency
  const barSegments = [
    { color: "#c25b8e", expandedFlex: "0.12" },
    { color: "#3f3a7c", expandedFlex: "0.38" },
    { color: "#0f0a36", expandedFlex: "0.20" },
    { color: "#a98ad0", expandedFlex: "0.10" },
    { color: "#f2c9e1", expandedFlex: "0.07" },
    { color: "#d3f0c2", expandedFlex: "0.05" },
    { color: "#e6c972", expandedFlex: "0.08" },
  ]

  return (
    <>
      {/* Fixed bottom bar */}
      <div className="w-full h-2 flex fixed bottom-0 left-0 right-0 z-[100]">
        {barSegments.map((segment, index) => (
          <div
            key={`fixed-${index}`}
            className={`bg-[${segment.color}] transition-all duration-600 ease-in-out bottom-bar-segment`}
            style={{
              backgroundColor: segment.color,
              flex: isExpanded ? segment.expandedFlex : 1,
            }}
          ></div>
        ))}
      </div>

      {/* Footer that appears at the bottom of the page */}
      <footer className="w-full h-[300px] relative">
        <div className="h-full flex">
          {barSegments.map((segment, index) => (
            <div
              key={`footer-${index}`}
              className="transition-all duration-600 ease-in-out"
              style={{
                backgroundColor: segment.color,
                flex: isExpanded ? segment.expandedFlex : 1,
                position: index === 1 ? "relative" : "static", // Only the second segment needs position relative for content
              }}
            >
              {index === 1 && showContent && (
                <div className="absolute inset-0 flex flex-col justify-center text-white p-8 opacity-0 animate-fade-in">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Zach Saul <span className="font-normal">| 2025</span>
                  </h2>
                  <p className="text-white/80 mb-8">Made Using V0 by Vercel</p>
                  <a
                    href="https://www.youtube.com/watch?v=N_dUmDBfp6k&t=26s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 italic hover:text-white/90 transition-colors"
                  >
                    so long and thanks for all the fish.
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}
