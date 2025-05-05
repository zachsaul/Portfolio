"use client"
import { ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import AnimatedFooter from "@/components/animated-footer"
import Link from "next/link"
import ComingSoonModal from "@/components/coming-soon-modal"
import OptimizedImage from "@/components/optimized-image"

// Note: Metadata can't be exported from client components, but we define it here for reference
// The actual metadata should be in a server component or layout file
const metadata = {
  title: "Zach Saul - UX Designer & Strategist",
  description:
    "Portfolio of Zach Saul, Senior Product Designer & UX Strategist helping businesses solve problems and build effective products.",
}

export default function HomePage() {
  // Words to rotate through in the pill
  const words = ["people", "businesses", "startups", "developers", "companies", "creators"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showProjects, setShowProjects] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  // State for the coming soon modal
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState("")

  // Set up the word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  // Set up scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowProjects(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle scroll button click
  const handleScrollClick = () => {
    setShowProjects(true)
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to open the coming soon modal
  const openComingSoonModal = (projectTitle: string) => {
    setSelectedProject(projectTitle)
    setIsComingSoonModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  // Function to close the coming soon modal
  const closeComingSoonModal = () => {
    setIsComingSoonModalOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[60vh]">
            {/* Left column with SVG */}
            <div>
              <OptimizedImage
                src="/images/greeting.svg"
                alt="Hiya, I'm"
                width={500}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Right column with description */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium">I'm a Senior Product Designer & UX Strategist.</p>
              <p className="text-xl">
                I help{" "}
                <span className="inline-block bg-black text-white px-3 py-1 rounded-full">
                  {words[currentWordIndex]}
                </span>{" "}
                solve problems, learn about their audience, and build things that work.
              </p>
              <p className="text-xl">Below are some examples.</p>
            </div>
          </div>

          {/* Scroll indicator - positioned to be at least 50px from bottom */}
          <div className="flex justify-center mt-16 mb-[50px]">
            <div className="relative w-24 h-24 cursor-pointer" onClick={handleScrollClick}>
              <div className="absolute inset-0 flex items-center justify-center">
                <ChevronDown size={32} />
              </div>
              <svg className="animate-spin-slow" width="96" height="96" viewBox="0 0 96 96">
                <path id="textPath" d="M48 8 A 40 40 0 1 1 47.9 8" fill="none" stroke="transparent" />
                <text style={{ fontSize: "11px" }} className="uppercase tracking-widest">
                  <textPath href="#textPath" startOffset="0%">
                    Scroll · Scroll · Scroll · Scroll ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Projects Section - appears when scrolled or clicked */}
          <div
            ref={projectsRef}
            className={`transition-opacity duration-500 ${showProjects ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold mb-8 mt-16 text-black">Case Studies</h2>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Case Study 1 - Infant Mortality Monitor */}
              <div
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openComingSoonModal("Infant Mortality Monitor")}
              >
                <OptimizedImage
                  src="/images/grainy1.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Infant Mortality Monitor</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/baby.svg" alt="Baby icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </div>

              {/* Case Study 2 - Data Quality Tool - Now linked to case study */}
              <Link
                href="/case-study"
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <OptimizedImage
                  src="/images/grainy2.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Data Quality Tool</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/stack.svg" alt="Stack icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </Link>

              {/* Case Study 3 - Standing Eliptical Bike */}
              <div
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openComingSoonModal("Standing Eliptical Bike")}
              >
                <OptimizedImage
                  src="/images/grainy3.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Standing Eliptical Bike</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/bike.svg" alt="Bike icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </div>

              {/* Case Study 4 - Intermodal Shipping Dashboard */}
              <div
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openComingSoonModal("Intermodal Shipping Dashboard")}
              >
                <OptimizedImage
                  src="/images/grainy4.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Intermodal Shipping Dashboard</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/truck.svg" alt="Truck icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </div>

              {/* Case Study 5 - Modular Design Bootcamp */}
              <div
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openComingSoonModal("Modular Design Bootcamp")}
              >
                <OptimizedImage
                  src="/images/grainy5.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Modular Design Bootcamp</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/cap.svg" alt="Cap icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </div>

              {/* Case Study 6 - Illustrated Brand Identity */}
              <div
                className="rounded-lg overflow-hidden case-study-card group cursor-pointer h-64 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openComingSoonModal("Illustrated Brand Identity")}
              >
                <OptimizedImage
                  src="/images/grainy6.png"
                  alt="Background texture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Illustrated Brand Identity</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[15px] w-16 h-16 flex items-center justify-center">
                  <OptimizedImage src="/images/brush.svg" alt="Brush icon" width={32} height={32} className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animated Footer */}
      <AnimatedFooter />

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isComingSoonModalOpen} onClose={closeComingSoonModal} projectTitle={selectedProject} />
    </div>
  )
}
