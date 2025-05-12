import AnimatedFooter from "@/components/animated-footer"
import OptimizedImage from "@/components/optimized-image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Zach Saul",
  description:
    "Learn about Zach Saul, a Senior Product Designer & UX Strategist with experience in healthcare, banking, logistics, and politics.",
  keywords: ["About", "UX Designer", "Product Designer", "Zach Saul", "Portfolio"],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-0 overflow-x-hidden">
      {/* Light purple background accent */}
      <div className="absolute top-20 right-0 w-[300px] h-[150px] bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="space-y-24">
          {/* Hero section */}
          <section>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-16">
              There's a better way to
              <br />
              make stuff.
            </h1>

            {/* Methodology cards - grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Card 1 - Red */}
              <div className="transform rotate-[-2deg] bg-[#E95151] text-white p-6 rounded-lg shadow-lg h-[200px] flex flex-col justify-between">
                <h2 className="text-xl font-bold">Take state of the union.</h2>
                <p className="text-sm">
                  Designers <span className="font-bold">don't</span> know everything. Let's plot what we know and use
                  that knowledge to find out the things we don't.
                </p>
              </div>

              {/* Card 2 - Purple */}
              <div className="transform rotate-[1deg] bg-[#6D5CCC] text-white p-6 rounded-lg shadow-lg h-[200px] flex flex-col justify-between">
                <h2 className="text-xl font-bold">Settle on some goals.</h2>
                <p className="text-sm">
                  We can only leverage each other's power and talents to make exceptional things if we're facing the
                  same target.
                </p>
              </div>

              {/* Card 3 - Orange */}
              <div className="transform rotate-[-1deg] bg-[#E99A24] text-white p-6 rounded-lg shadow-lg h-[200px] flex flex-col justify-between">
                <h2 className="text-xl font-bold">Flesh it out.</h2>
                <p className="text-sm">
                  Let's record our ideas, put them on paper, sticky notes, whiteboards, and rigorously interrogate our
                  assumptions.
                </p>
              </div>

              {/* Card 4 - Blue */}
              <div className="transform rotate-[2deg] bg-[#66C3EE] text-white p-6 rounded-lg shadow-lg h-[200px] flex flex-col justify-between">
                <h2 className="text-xl font-bold">Test quickly.</h2>
                <p className="text-sm">
                  We can't predict the future... but we can predict if our idea serves the needs of the people we think
                  it does.
                </p>
              </div>

              {/* Card 5 - Green */}
              <div className="transform rotate-[-1.5deg] bg-[#57C753] text-white p-6 rounded-lg shadow-lg h-[200px] flex flex-col justify-between">
                <h2 className="text-xl font-bold">Plot a path forward.</h2>
                <p className="text-sm">Let's decide what the product needs next, and how it can get better.</p>
              </div>
            </div>
          </section>

          {/* About me section */}
          <section className="relative mb-32">
            {/* Decorative waves */}
            <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[300px] -z-10">
              <div className="absolute top-0 w-[500px] h-[80px] bg-[#E99A24] rounded-full blur-xl opacity-40"></div>
              <div className="absolute top-[100px] w-[500px] h-[80px] bg-[#66C3EE] rounded-full blur-xl opacity-40"></div>
            </div>

            <h2 className="text-5xl font-bold mb-12">About me</h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="max-w-2xl">
                <p className="text-lg mb-6">
                  I've designed in healthcare, banking, logistics, and politics and have seen problems of all shapes and
                  sizes. Here's my{" "}
                  <a
                    href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAUL_RESUME_2025.jpg-fx4wY1YJYsAXJ3gXjWq1cMHWiy15Ao.jpeg"
                    className="text-purple-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                  , if you want to know more about my previous work.
                </p>
                <p className="text-lg mb-[150px]">
                  When I'm not designing you might find me volenteering at a film festival, diagramming the perfect
                  sandwich, or trying to catch a great sunset.
                </p>
              </div>

              <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex-shrink-0">
                <OptimizedImage
                  src="/headshot.png"
                  alt="Profile photo"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Social Icons Section - Added before footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-medium mb-6">Find me online</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://letterboxd.com/zachsaul/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-110"
              aria-label="Letterboxd Profile"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-lg">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Letterboxd-rQMqRWcHUU8EjQuihylaSTJtNattPy.png"
                  alt="Letterboxd"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a
              href="https://codepen.io/zachsaul"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-110"
              aria-label="CodePen Profile"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-lg">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Codepen-5svFPT0P64ZXn56WbCiMB4AY4SYE0N.png"
                  alt="CodePen"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/zach-saul/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-lg">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedin-Sukvj5fne60AUE1KpbgKKYTClTpLiF.png"
                  alt="LinkedIn"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a
              href="https://www.behance.net/zach-saul"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-110"
              aria-label="Behance Profile"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-lg">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Behance-jS1U9ECNqZRnKUjtfZyegFbN3LIzBb.png"
                  alt="Behance"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/zachsaul"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-110"
              aria-label="Dribbble Profile"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-lg">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dribbble-bVasi8rnLVA53WFlv0fBPXcrTiejBK.png"
                  alt="Dribbble"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <AnimatedFooter />
    </div>
  )
}
