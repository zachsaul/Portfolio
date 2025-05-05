"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  style,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle loading state
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Determine if the image is from an external source
  const isExternal = src.startsWith("http") || src.startsWith("https")

  // Ensure we have a valid src
  const imageSrc = src || "/placeholder.svg"

  // For GIFs, we need to use unoptimized
  const isGif = imageSrc.toLowerCase().endsWith(".gif")
  const shouldUnoptimize =
    isGif || (isExternal && !imageSrc.includes("vercel-storage.com") && !imageSrc.includes("v0.blob.com"))

  return (
    <div
      className={`relative ${fill ? "w-full h-full" : ""} ${isLoading ? "bg-gray-200 animate-pulse" : ""}`}
      style={style}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}
        priority={priority}
        quality={quality}
        sizes={sizes}
        fill={fill}
        onLoadingComplete={handleLoadingComplete}
        loading={priority ? "eager" : "lazy"}
        unoptimized={shouldUnoptimize}
      />
    </div>
  )
}
