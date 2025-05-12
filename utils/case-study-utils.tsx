"use client"

import { useState, useEffect, useMemo } from "react"
import OptimizedImage from "@/components/optimized-image"

// AnimatedBar component for metrics
export const AnimatedBar = ({ percentage, color, value }) => {
  return (
    <div className="relative">
      <div className="h-8 bg-gray-200 rounded-full w-full">
        <div
          className={`h-8 ${color} rounded-full flex items-center justify-end px-3 animate-in-view`}
          style={{
            width: `${percentage}%`,
            transform: "scaleX(0)",
            transformOrigin: "left",
          }}
        >
          <span className="font-montserrat font-medium text-sm whitespace-nowrap">{value}</span>
        </div>
      </div>
    </div>
  )
}

// Tab state management
export const useTabState = (initialState) => {
  const [tabStates, setTabStates] = useState(initialState)

  const updateTabState = (key, value) => {
    setTabStates((prev) => ({ ...prev, [key]: value }))
  }

  return [tabStates, updateTabState]
}

// Animation for rating bars when scrolled into view
export const useAnimationObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll(".animate-in-view")
            animatedElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                el.style.animation = "scaleXIn 1s ease-out forwards"
              }
            })
            // Only unobserve if the element still exists in the DOM
            if (document.body.contains(entry.target)) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    // Use a small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll(".metrics-comparison, [data-animate]")
      sections.forEach((section) => {
        if (section && document.body.contains(section)) {
          observer.observe(section)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      // Safely disconnect the observer
      observer.disconnect()
    }
  }, [])
}

// Generate circle properties for animation
export const generateCircleProps = (i, totalCircles, isBackground = true) => {
  // Random properties for each circle
  const color = ["#FF0000", "#C03B3B", "#FFD3D3", "#FD3A3A", "#C26363", "#FC8181"][Math.floor(Math.random() * 6)]

  // Distribute sizes according to specified percentages
  const sizeRandom = Math.random() * 100
  let radius
  if (sizeRandom < 10) radius = 80
  else if (sizeRandom < 25) radius = 50
  else if (sizeRandom < 45) radius = 35
  else if (sizeRandom < 70) radius = 25
  else radius = 15

  // Random starting X position (percentage of container width)
  const startXPos = Math.random() * 100

  // Direction of movement (half move left-to-right, half right-to-left)
  const moveLeftToRight = i % 2 === 0

  // Random Y position (percentage of container height)
  const yPos = Math.max(radius, Math.min(Math.random() * 425, 425 - radius * 2))

  // Animation speed category (randomly assigned)
  const speedCategory = Math.floor(Math.random() * 3)
  let duration

  // Set duration based on speed category (25% faster than before)
  if (speedCategory === 0) {
    // Slow: 25s * 0.75 = 18.75s
    duration = "18.75s"
  } else if (speedCategory === 1) {
    // Medium: 20s * 0.75 = 15s
    duration = "15s"
  } else {
    // Fast: 15s * 0.75 = 11.25s
    duration = "11.25s"
  }

  return {
    key: `${isBackground ? "bg" : "fg"}-circle-${i}`,
    className: `absolute rounded-full${!isBackground ? " z-20" : ""}`,
    style: {
      backgroundColor: color,
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
      left: `${startXPos}%`,
      top: `${yPos}px`,
      opacity: 0.95,
      animation: moveLeftToRight
        ? `moveLeftToRight ${duration} infinite ease-in-out`
        : `moveRightToLeft ${duration} infinite ease-in-out`,
      animationDelay: `${Math.random() * 10}s`,
    },
  }
}

// Generate background circles for animation
export const BackgroundCircles = ({ count = 39 }) => {
  const circles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const props = generateCircleProps(i, count, true)
      return <div key={props.key} className={props.className} style={props.style} />
    })
  }, [count])

  return <>{circles}</>
}

// Generate foreground circles for animation
export const ForegroundCircles = ({ count = 13 }) => {
  const circles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const props = generateCircleProps(i, count, false)
      return <div key={props.key} className={props.className} style={props.style} />
    })
  }, [count])

  return <>{circles}</>
}

// Update the CirclesAnimation component
export const CirclesAnimation = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-20 overflow-hidden" style={{ height: "425px" }}>
      <div className="circles-animation-container relative w-full h-full">
        {/* Background Circles (39) */}
        <BackgroundCircles count={39} />

        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <OptimizedImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2011-pAJIhkkadXx1e8YaTnaa1kkWBPK0MR.png"
            alt="Person illustration"
            width={300}
            height={300}
            className="h-auto w-auto max-h-[300px] md:max-h-[320px] lg:max-h-[340px] xl:max-h-[360px]"
            style={{ height: "66%", maxHeight: "75%" }}
          />
        </div>

        {/* Foreground Circles (13) */}
        <ForegroundCircles count={13} />
      </div>
    </div>
  )
}
