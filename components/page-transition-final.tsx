"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type PageTransitionProps = {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [nextPath, setNextPath] = useState<string | null>(null)
  const [navigationStartTime, setNavigationStartTime] = useState<number | null>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<HTMLDivElement[]>([])

  // Animation durations in milliseconds - increased by 50%
  const CURTAIN_UP_DURATION = 600 // was 400
  const LOADING_MIN_DURATION = 750 // was 500
  const CURTAIN_DOWN_DURATION = 600 // was 400
  const LOADING_FADE_DURATION = 450 // was 300

  // Handle link clicks to trigger the transition
  const handleLinkClick = (e: MouseEvent, href: string) => {
    // Only handle internal links that navigate to a different page
    if (href.startsWith("/") && href !== pathname) {
      e.preventDefault()

      // Don't start a new transition if one is already in progress
      if (isTransitioning) return

      setNextPath(href)
      startTransition(href)
    }
  }

  // Start the transition animation
  const startTransition = (href: string) => {
    setIsTransitioning(true)

    // Phase 1: Move the curtain up to cover the content instantly
    if (curtainRef.current) {
      curtainRef.current.style.transition = "none" // Remove transition for instant appearance
      curtainRef.current.style.transform = "translateY(0%)" // Move curtain up to cover content
    }

    // After curtain covers content, show loading indicator and start bar animations
    setTimeout(() => {
      setShowLoading(true)
      startBarAnimations()

      // Prefetch the next page
      router.prefetch(href)

      // Track when we started loading
      const startTime = Date.now()
      setNavigationStartTime(startTime)

      // Navigate to the new page
      router.push(href)
    }, CURTAIN_UP_DURATION)
  }

  // Start the bar animations
  const startBarAnimations = () => {
    // Get all the bar elements
    const bars = document.querySelectorAll(".bottom-bar-segment") as NodeListOf<HTMLDivElement>
    barRefs.current = Array.from(bars)

    // Store original heights
    barRefs.current.forEach((bar) => {
      // Store original height as a data attribute
      const originalHeight = Number.parseInt(getComputedStyle(bar).height)
      bar.dataset.originalHeight = originalHeight.toString()

      // Start the animation
      animateBar(bar)
    })
  }

  // Animate a single bar
  const animateBar = (bar: HTMLDivElement) => {
    if (!isTransitioning || !showLoading) return

    // Get random height increase (10, 20, or 30 pixels)
    const heightIncrease = [10, 20, 30][Math.floor(Math.random() * 3)]
    const originalHeight = Number.parseInt(bar.dataset.originalHeight || "2")
    const newHeight = originalHeight + heightIncrease

    // Animate to new height
    bar.style.transition = "height 0.5s ease-in-out"
    bar.style.height = `${newHeight}px`

    // Schedule next animation after random delay (between 0.3s and 0.8s)
    const delay = 300 + Math.random() * 500
    setTimeout(() => {
      // Animate back to original height
      bar.style.height = `${originalHeight}px`

      // Schedule next height increase
      setTimeout(() => {
        if (isTransitioning && showLoading) {
          animateBar(bar)
        }
      }, 500)
    }, delay)
  }

  // Stop bar animations and reset to original heights
  const stopBarAnimations = () => {
    barRefs.current.forEach((bar) => {
      const originalHeight = bar.dataset.originalHeight
      if (originalHeight) {
        bar.style.transition = "height 0.5s ease-in-out"
        bar.style.height = `${originalHeight}px`
      }
    })
  }

  // Watch for pathname changes to detect when navigation is complete
  useEffect(() => {
    // If we're transitioning and the pathname matches the next path,
    // the navigation has completed
    if (isTransitioning && nextPath && pathname === nextPath && navigationStartTime) {
      // Calculate how much time has passed since we started loading
      const elapsedTime = Date.now() - navigationStartTime
      const remainingTime = Math.max(0, LOADING_MIN_DURATION - elapsedTime)

      // Wait for the minimum loading time to elapse
      const timer = setTimeout(() => {
        // Stop bar animations
        stopBarAnimations()

        // Fade out loading indicator
        if (loadingRef.current) {
          loadingRef.current.style.opacity = "0"
        }

        // After loading indicator fades out, move the curtain down
        const fadeTimer = setTimeout(() => {
          setShowLoading(false)

          // Phase 3: Move the curtain down to reveal the new content with transition
          if (curtainRef.current) {
            curtainRef.current.style.transition = "transform 600ms ease-in-out" // Add transition for disappearing
            curtainRef.current.style.transform = "translateY(100%)" // Move curtain down to reveal content
          }

          // Reset transition state after animation completes
          const resetTimer = setTimeout(() => {
            setIsTransitioning(false)
            setNextPath(null)
            setNavigationStartTime(null)
          }, CURTAIN_DOWN_DURATION)

          return () => clearTimeout(resetTimer)
        }, LOADING_FADE_DURATION)

        return () => clearTimeout(timer)
      }, remainingTime)

      return () => clearTimeout(timer)
    }
  }, [pathname, isTransitioning, nextPath, navigationStartTime])

  // Override all link clicks to use our transition
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.getAttribute("href")) {
        const href = link.getAttribute("href") as string
        handleLinkClick(e, href)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [pathname, isTransitioning])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page content */}
      <div className="min-h-screen">{children}</div>

      {/* White curtain for transition */}
      <div
        ref={curtainRef}
        className="w-full h-[calc(100vh-64px)] bg-white fixed top-[64px] left-0 right-0 z-[99]"
        style={{ transform: "translateY(100%)" }} // Initially positioned below the content
      >
        {/* Loading indicator - simplified black circle */}
        {showLoading && (
          <div
            ref={loadingRef}
            className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-450 ease-in-out"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full animate-simple-pulse"></div>
            </div>
            <p className="text-gray-600 text-lg mt-4">loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}
