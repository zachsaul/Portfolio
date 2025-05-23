"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { UserRound, Building, BarChart3, Database, DollarSign, Search } from "lucide-react"
import { AnimatedBar, useTabState, useAnimationObserver, CirclesAnimation } from "./utils/case-study-utils"
import OptimizedImage from "./components/optimized-image"

// This component uses h2 elements with a line-height of 3.5rem defined in globals.css

export default function CaseStudy() {
  const [tabStates, updateTabState] = useTabState({
    activeTab: "doctors",
    problemTab: "typeos",
    insightTab: "disconnect",
  })

  // Initialize animation observer
  useAnimationObserver()

  // Add a style to hide all number indicators
  const hideNumberStyle = { display: "none" }

  return (
    <>
      {/* Title Section - Updated with full-width banner */}
      <section className="w-full relative overflow-hidden" style={{ zIndex: "-1" }}>
        {/* Full-width banner image */}
        <div className="w-full h-[600px] relative">
          <OptimizedImage
            src="/images/banner-hero.jpg"
            alt="Banner hero image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content container - positioned absolutely over the image with top-left alignment */}
          <div className="absolute inset-0">
            <div className="max-w-4xl mx-auto px-4 pt-20 sm:pt-24 md:pt-32 relative z-10">
              <div className="text-white">
                <h1 className="text-5xl sm:text-6xl md:text-7xl flex items-center gap-4">
                  <span className="font-[800] font-open-sans">Chaos</span>
                  <span className="font-normal font-open-sans">to</span>
                  <span
                    className="font-[800] font-open-sans text-transparent"
                    style={{
                      WebkitTextStroke: "1px white",
                      textStroke: "1px white",
                    }}
                  >
                    Clarity
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium mt-2">
                  Designing a Smarter Tool for Medical Informaticists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Intro Section - Adjusted to overlap with banner */}
      <section className="relative" style={{ marginTop: "-300px" }}>
        {/* Marker div at the beginning of intro section */}
        <div
          className="h-[90px] w-[100vw] mt-2 mb-[-2px]"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink-top-g0tDXnKTmwRHo1bR5dJfg0U4Uo9B3Y.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90px",
            width: "100vw",
          }}
        ></div>

        {/* Pink dotted background part */}
        <div
          className="w-full py-8"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watercolor-MennCkyqbqN22HUd9FBf0LcDpWMrqB.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row px-4">
            <div className="w-full md:w-[74%]">
              <div className="space-y-2 mb-6 flex flex-col">
                <div
                  className="px-[0.7rem] py-[0.2rem] rounded-full bg-[#FF9085] text-white font-bold w-fit"
                  style={{ fontSize: "0.85rem" }}
                >
                  Timeline: 18 Months
                </div>

                <div
                  className="px-[0.7rem] py-[0.2rem] rounded-full bg-[#8C6FFF] text-white font-bold w-fit"
                  style={{ fontSize: "0.85rem" }}
                >
                  Industry | Healthcare Technology
                </div>

                <div
                  className="px-[0.7rem] py-[0.2rem] rounded-full bg-[#57CC6D] text-white font-bold w-fit"
                  style={{ fontSize: "0.85rem" }}
                >
                  Role: Lead Designer
                </div>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-black mb-2">
                  Project:{" "}
                  <span className="font-normal">
                    Research and design a tool to integrate a clinical matching database into informaticists' (clinical
                    experts who manage and reconcile medical terms across hospital systems) workflow.
                  </span>
                </p>
              </div>

              <p className="text-lg text-gray-800 mb-8">
                My client built a massive dictionary of medical terms, and asked for our help creating software tools to
                help professionals leverage it in their workflows.
              </p>
            </div>

            <div
              className="w-full md:w-[25%] relative hidden md:block"
              style={{ overflow: "visible", position: "absolute", right: 0 }}
            >
              <div className="relative" style={{ position: "absolute", width: "100%", right: 0 }}>
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup-e92BIrwIwDf5zqJQEC0LSyStLIgsle.png"
                  alt="Medical informatics tool interface on MacBook Pro"
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full" style={hideNumberStyle}>
                    24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marker div at the end of pink section */}

        <div
          className="h-[90px] w-[100vw]"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink-bottom-Rt3tDsSS7avDEWTYlKO3629OCJzEe3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90px",
            width: "100vw",
          }}
        ></div>

        {/* results preview */}
        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto font-montserrat">
            <p className="text-lg text-gray-800 mb-12 w-full">
              Through user research, prototyping, and iterative usability testing, I led a redesign that resulted in:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="relative">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-IJEa7rtQ2Fs7rHWjX96x1Xf4lOFC1R.png"
                      alt="Increase arrow"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold bg-white/70 px-2 py-1 rounded-full" style={hideNumberStyle}>
                        25
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black">23%</h3>
                  <p className="text-lg font-medium">increase in ease-of-use scores for matching terms</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <div className="relative">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-IJEa7rtQ2Fs7rHWjX96x1Xf4lOFC1R.png"
                      alt="Increase arrow"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold bg-white/70 px-2 py-1 rounded-full" style={hideNumberStyle}>
                        26
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black">25%</h3>
                  <p className="text-lg font-medium">increase in likelihood of tool adoption</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="relative">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-IJEa7rtQ2Fs7rHWjX96x1Xf4lOFC1R.png"
                      alt="Increase arrow"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold bg-white/70 px-2 py-1 rounded-full" style={hideNumberStyle}>
                        26
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black">19%</h3>
                  <p className="text-lg font-medium">Faster term matching (vs. legacy tool)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marker div at the end of intro section */}
      </section>
      {/* Background Section */}
      <section className="mb-4">
        <div className="max-w-4xl mx-auto px-4 font-montserrat">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-black mb-10">Context</h2>
          <p className="text-lg text-muted-foreground mb-2 w-full">
            The client spent decades building a huge medical terminology dictionary, but they didn't have marketable
            software tools to support it. Clinical experts faced mounting inefficiencies as they manually cleaned and
            matched data across disconnected hospital systems. They asked for our help designing a tool to better
            surface, sort, and act on messy data.
          </p>
          <div className="w-full mb-10 mt-10">
            <details className="border border-black rounded-lg bg-white">
              <summary className="p-4 font-medium cursor-pointer bg-white hover:bg-gray-50 rounded-t-lg">
                Why do hospitals care about data quality?
              </summary>
              <div className="p-6 border-t border-black">
                <p className="text-muted-foreground mb-6">
                  If hospitals clearly understand what tests, procedures and diagnosis are being recorded at a macro
                  scale, they can:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Box 1 */}
                  <div className="border border-black rounded-lg p-6">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-Nj7OKkrZdc3DK5B3b3nFOtUVb15lRG.png"
                        alt="Thumbs up icon"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-gray-800">
                      Make recommendations to help the hospital run more efficiently, and cut costs
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="border border-black rounded-lg p-6">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reso-Oy1aBFjWnChjY1wpPqdr9lopyBzLd9.png"
                        alt="Resource allocation icon"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-gray-800">Allocate internal resources appropriately according to demand</p>
                  </div>

                  {/* Box 3 */}
                  <div className="border border-black rounded-lg p-6">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nego-l8xJExbkuvvAm3CVb09qLM0OdC9l9a.png"
                        alt="Negotiation icon"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-gray-800">Negotiate with insurance to reduce red tape and (sometimes) cost.</p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      {/* Stakeholders Tabs Section */}
      <section className="mb-16 mt-0">
        <div className="max-w-4xl mx-auto px-4 font-montserrat">
          <Tabs
            defaultValue="doctors"
            value={tabStates.activeTab}
            onValueChange={(v) => updateTabState("activeTab", v)}
            className="w-full"
          >
            <div className="bg-muted/30 rounded-lg p-6 border">
              <div className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-black">
                    Medicine Needs a Universal Language
                  </h3>
                  <p className="text-muted-foreground mb-12">
                    When you go to the doctor for something simple like a broken leg, you might assume that means the
                    same thing to all parties involved. However, after interviewing key experts my research team
                    identified 4 misaligned actors relevant to data quality. My client's mission is to align these four
                    actors, by giving them a universal dictionary.
                  </p>
                </div>
              </div>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto flex-wrap">
                <TabsTrigger value="doctors" className="flex flex-col items-center gap-2 py-3 h-auto">
                  <UserRound className="h-5 w-5" />
                  <span>Doctors</span>
                </TabsTrigger>
                <TabsTrigger value="providers" className="flex flex-col items-center gap-2 py-3 h-auto">
                  <Building className="h-5 w-5" />
                  <span>Providers</span>
                </TabsTrigger>
                <TabsTrigger value="analysts" className="flex flex-col items-center gap-2 py-3 h-auto">
                  <BarChart3 className="h-5 w-5" />
                  <span>Data Analysts</span>
                </TabsTrigger>
                <TabsTrigger value="informaticists" className="flex flex-col items-center gap-2 py-3 h-auto">
                  <Database className="h-5 w-5" />
                  <span>Informaticists</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="doctors" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-auto flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users_t1-dWo81thHXQ7lFC5RpPNycQZ1Wq6Aa1.png"
                            alt="Doctor illustration"
                            className="h-auto w-auto max-h-[170px]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full"
                              style={hideNumberStyle}
                            >
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        <h4 className="text-xl font-medium mb-3">Doctors</h4>
                        <p className="text-muted-foreground">
                          Want relief from red tape and an easier way to satisfy insurance requirements and navigate
                          hospital inconsistencies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="providers" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-auto flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users_t2-CvvSjII0KPutAh6JNFqSegZJmxuCcD.png"
                            alt="Insurance provider illustration"
                            className="h-auto w-auto max-h-[170px]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full"
                              style={hideNumberStyle}
                            >
                              3
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        <h4 className="text-xl font-medium mb-3">Providers</h4>
                        <p className="text-muted-foreground">
                          Want to assume less risk, while maximizing profits. Serve as gatekeeper for the necessity of
                          many medical procedures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analysts" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-auto flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users_t3-2PJkHmthl5H5j2yBz0JDD2dMErBQ7U.png"
                            alt="Hospital administrator illustration"
                            className="h-auto w-auto max-h-[170px]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full"
                              style={hideNumberStyle}
                            >
                              4
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        <h4 className="text-xl font-medium mb-3">Data Analysts</h4>
                        <p className="text-muted-foreground">
                          Want to understand trends and patterns in medical data to improve outcomes and reduce costs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="informaticists" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-auto flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users_t4-0scATYT0ZyYqRBLc20BjqLBGqYILhW.png"
                            alt="Informaticist illustration"
                            className="h-auto w-auto max-h-[170px]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full"
                              style={hideNumberStyle}
                            >
                              5
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        <h4 className="text-xl font-medium mb-3">Informaticists</h4>
                        <p className="text-muted-foreground">
                          Want to bridge the gap between clinical practice and technology to improve healthcare
                          delivery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      {/* Mission Section */}
      <section className="mb-4">
        <div className="max-w-4xl mx-auto px-4 font-montserrat">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-black mb-10">
            Identifying the Design Opportunity
          </h2>

          <p className="text-muted-foreground mb-8">
            My team conducted a series of interviews and workshops with subject matter experts to understand how
            healthcare data gets produced and the factors that affect its quality. I wanted to identify which actors
            contribute to inefficiencies, and why.
          </p>
          <p className="text-muted-foreground mb-8">
            Below is a highly simplified journey map summarizing my team's key findings from these interviews.
          </p>

          {/* Journey Map Graphic - Full width image with improved quality settings */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-16">
            {/* Desktop version - only show on md screens and up */}
            <div className="hidden md:block">
              {/* Use the high-resolution image for all desktop sizes with improved quality settings */}
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5stepsbig-J8TxuVI671GW2uU9l0iIhMmox03sOI.png"
                alt="Healthcare journey map showing the flow from Diagnosis to Data Analysis with 5 numbered steps and pain points"
                width={1400}
                height={700}
                className="w-full h-auto"
                priority
                quality={95}
                sizes="100vw"
                unoptimized={false}
              />
            </div>

            {/* Mobile version - only show on smaller screens */}
            <div className="block md:hidden">
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v3_journey-kak0zwwnGIQPqOciEQsYXW5IHntK8h.png"
                alt="Healthcare journey map showing the flow from Diagnosis to Data Analysis"
                width={1200}
                height={600}
                className="w-full h-auto"
                quality={95}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* New Content Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4 font-montserrat">
          <p className="text-muted-foreground mb-2">
            Examining the interview results, we determined my client's terminology dictionary and expertise was unlikely
            to be able to help with major systemic problems in the healthcare system, but could clearly be leveraged to
            help with the data analysis of inconsistent data.
          </p>
        </div>
      </section>
      {/* Full-width Quote Section - Updated with #181818 background and zigzag borders */}
      <section className="w-full px-4 mb-16 bg-[#181818] min-h-[200px] flex flex-col justify-center relative py-[25px]">
        {/* Top zigzag - positioned to extend 24px above the section */}
        <div
          className="w-[100vw] h-[35px] absolute left-0"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zag-top-4Gaz5ZqPS2tOYUi5j9kcTWwhBZgVJh.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "35px",
            top: "-34px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto" style={{ padding: "25px 0" }}>
          <blockquote className="pullquote text-white mb-4">
            "I spend 80% of my time documenting information I've already entered somewhere else."
          </blockquote>
          <p className="text-white/70 text-sm font-medium text-left">Anonymous Doctor</p>
        </div>

        {/* Bottom zigzag - positioned to extend 24px below the section */}
        <div
          className="w-[100vw] h-[35px] absolute left-0"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zag-bottom-2kYYJ1r7NCsnJcQ7UvuRP9G9MiVmAY.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "35px",
            bottom: "-34px",
          }}
        ></div>
      </section>
      {/* Rest of the code remains unchanged */}
      {/* Replace the gradient background with the persona image */}
      <div className="max-w-4xl mx-auto mb-16 px-4 sm:px-6">
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-black">Meet the Informaticist</h3>

        <div className="flex flex-col md:flex-row">
          {/* Left Column - Replaced gradient box with persona image */}
          <div className="w-full md:w-1/2 pt-10">
            <div className="relative">
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/persona-RwxjGhABxDjCulBfYogVIQvWtoDrXS.png"
                alt="Informaticist persona showing key characteristics: Manages Millions of Terms, Clinically Knowledgable, Accountable to doctors and administrators"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full md:w-2/3 py-10 px-6 md:px-10">
            <p className="text-muted-foreground mb-6">
              Informaticists are clinical experts who are in charge of ensuring the accuracy of enormous data sets. They
              look for inconsistencies and how to maximize the effectiveness of their hospital's work.
            </p>
            <p className="text-muted-foreground">
              Informaticists' clinical knowledge is both rare and valuable; therefore maximizing their time/effort is
              vital. The Informaticist is the human being who intervenes when the AI is unable to match a term to the
              universal dictionary.
            </p>
          </div>
        </div>
      </div>
      {/* Additional paragraph about AI and Informaticists */}
      {/* 3-Column Process Section */}
      {/* AI Process Image - Full Width */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative w-full">
          <OptimizedImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-RSIM174aOXg8eTnYVZZpOhunnkXwIW.png"
            alt="AI Process: Doctor entry, AI matching, and Human review workflow"
            width={1200}
            height={600}
            className="w-full h-auto rounded-[10px] max-w-full"
            style={{ maxWidth: "100%" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
              29
            </span>
          </div>
        </div>
      </div>
      {/* NEW CONTENT STARTS HERE */}
      {/* Data Quality Problems - Fixed width to match text content */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-black">Data Quality Problems</h3>
        <p className="text-muted-foreground mb-6">
          I then conducted a second set of unstructured interviews with Infomatacists to identify key problems with the
          data they saw. Informaticists consistently told us that while accuracy matters when managing a system with
          millions of terms, making the most of limited clinical expertise is even more critical for achieving
          meaningful impact.
        </p>

        {/* Circles Animation Section - Updated to match content width */}
        <div className="w-full relative mb-20 overflow-hidden" style={{ height: "425px" }}>
          <div className="circles-animation-container relative w-full h-full">
            {/* Background Circles (39) */}
            <CirclesAnimation />
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          During those interviews, we identified three key problems with the data they saw;
        </p>
      </div>
      {/* Problems Tabs Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <Tabs
          defaultValue="typeos"
          value={tabStates.problemTab}
          onValueChange={(v) => updateTabState("problemTab", v)}
          className="w-full"
        >
          <div className="bg-muted/30 rounded-lg p-6 border">
            <TabsList className="grid grid-cols-3 mb-8 h-auto">
              <TabsTrigger value="interpretation" className="py-3 h-auto">
                Interpretation
              </TabsTrigger>
              <TabsTrigger value="typeos" className="py-3 h-auto">
                Typos
              </TabsTrigger>
              <TabsTrigger value="notation" className="py-3 h-auto">
                Inconsistent Notation
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Type-os */}
            <TabsContent value="typeos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Broken Leg - I</h3>
                    <p className="text-muted-foreground mb-4">fibula sprain, heavy bruising</p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">
                      Br<span className="text-red-500 font-bold">OO</span>ken Leg
                    </h3>
                    <p className="text-muted-foreground mb-4">fibula sprain, heavy bruising</p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">L Fib. Break</h3>
                    <p className="text-muted-foreground mb-4">Sprained leg fibula, ankle bruising</p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-lg font-medium mt-6 text-red-500">
                Doctors are busy and often would make subtle typos when entering in information.
              </h4>
            </TabsContent>

            {/* Tab 2: Notation */}
            <TabsContent value="notation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Broken Leg - I</h3>
                    <p className="text-muted-foreground mb-4">
                      <span className="text-red-500 font-bold">fibula</span> sprain, heavy bruising
                    </p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">BroOken Leg</h3>
                    <p className="text-muted-foreground mb-4">
                      <span className="text-red-500 font-bold">fibula</span> sprain, heavy bruising
                    </p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">
                      <span className="text-red-500 font-bold">L Fib.</span> Break
                    </h3>
                    <p className="text-muted-foreground mb-4">Sprained leg fibula, ankle bruising</p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-lg font-medium mt-6 text-red-500">
                Abbreviations that were commonplace to some specialties but not others made matching terms difficult at
                scale.
              </h4>
            </TabsContent>

            {/* Tab 3: Interpretation */}
            <TabsContent value="interpretation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Broken Leg - I</h3>
                    <p className="text-muted-foreground mb-4">
                      fibula sprain, <span className="text-red-500 font-bold">heavy bruising</span>
                    </p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Broken Leg - I</h3>
                    <p className="text-muted-foreground mb-4">
                      fibula sprain, <span className="text-red-500 font-bold">significant bruising</span>
                    </p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Broken Leg - I</h3>
                    <p className="text-muted-foreground mb-4">
                      fibula sprain, <span className="text-red-500 font-bold">contusion</span>
                    </p>
                    <div className="flex mb-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">treat with cast</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-lg font-medium mt-6 text-red-500">
                We found in this user group, members are hard wired to interrogate detail, and that very small
                individual differences in language for similar problems often caused differences in interpretation.
              </h4>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {/* Initial Approach Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-black mb-10">Initial Approach</h2>

          <h3 className="text-xl md:text-2xl font-medium mb-6 text-black">A sneak peek before you start cleaning</h3>

          <p className="text-muted-foreground mb-10">
            I set out to design a digital tool to support the informaticists' need to see granular clinical details at a
            bird's eye view as they clean up their data. Research clearly showed Informaticists have more data to clean
            up than they could ever possibly complete fully. Through prioritization workshops with internal experts, we
            focused on a key working assumption:
          </p>

          {/* Two boxes side by side */}
          {/* Single box taking full width */}
          <div className="mb-16">
            {/* Box */}
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-muted/30 rounded-lg border">
              <div className="w-full md:w-1/4">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulb-WO8VpuUU84rwVnlzBAI6zAeBBmm8tB.png"
                    alt="Light bulb representing an idea"
                    className="h-auto w-full max-w-[200px] object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold bg-white/70 px-3 py-1 rounded-full" style={hideNumberStyle}>
                      11
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 flex items-center">
                <p className="text-muted-foreground text-[1.2em] italic">
                  If they can define a "slice" and forecast the impact of analyzing that slice, it will help them
                  prioritize, and work more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Full-width section with background */}
      <section className="w-full bg-[#3E48AE] py-16 px-4 mb-16 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-white mb-10">
            We knew from our research that each medical term an Informatacist sees in their list might exist thousands
            of times across their network. This means matching some terms will be more impactful to data health than
            others.
          </p>

          {/* Why? Accordion */}
          <div className="w-full mb-10">
            <details className="border rounded-lg border-gray-600 bg-[rgba(0,0,0,0.2)]">
              <summary className="p-4 font-medium cursor-pointer bg-[rgba(0,0,0,0.2)] rounded-t-lg text-white">
                Why?
              </summary>
              <div className="p-6 border-t border-gray-600">
                <p className="text-white/80 mb-4 italic">
                  If "X-Ray" exists 4x in the database, matching it to a universal term will have 4x the impact of
                  matching "Microbiotia Transplant" on overall data quality.
                </p>
                <div className="relative w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newacco-ZZbp3aWn5ATdKnHT23d696UDGUbvrW.png"
                    alt="Match volume visualization showing 70% progress with X-Ray (Right Leg) appearing 4 times and Microbiota Transplant appearing once"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </details>
          </div>

          <p className="text-white mb-10">
            We hypothesized a forecast might make scoping work easier given limited time and a massive database.
          </p>

          <div className="w-full mb-10">
            <div className="relative w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-TJ3wvj878fqTpbaoLhpJXlb3LHfhIx.png"
                alt="Informaticist workflow: Scope the Problem, Forecast the Impact, and Clean the Data"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                  12
                </span>
              </div>
            </div>
          </div>

          <p className="text-white mb-10">
            We tested this concept with a group of informaticists to get some rapid feedback and see if we were close.
          </p>

          {/* Collapsible Study Details */}
          <div className="w-full mb-16">
            <details className="border rounded-lg border-gray-600 bg-[rgba(0,0,0,0.2)]">
              <summary className="p-4 font-medium cursor-pointer bg-[rgba(0,0,0,0.2)] rounded-t-lg text-white">
                Study Details
              </summary>
              <div className="p-6 border-t border-gray-600">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Goals - 2/3 width */}
                  <div className="w-full md:w-2/3">
                    <h4 className="font-medium mb-4 text-white">Goals</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                      <li>
                        Understand how and if Informaticists scope their work when matching terms and cleaning data.
                      </li>
                      <li>
                        Evaluate if forecasting impact before work takes place increases informaticist satisfaction.
                      </li>
                    </ol>
                  </div>

                  {/* Study details with icons - 1/3 width */}
                  <div className="w-full md:w-1/3">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-gray-300">
                        <UserRound className="h-5 w-5 text-gray-300" />
                        <span>6 Informaticists</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <svg
                          className="h-5 w-5 text-gray-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>60 min. remote usability test</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <svg
                          className="h-5 w-5 text-gray-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                        <span>recorded interaction with a virtual prototype</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* Key Insights Accordions Section */}
          <div className="bg-[#3E48AE] rounded-lg p-6 border border-white/20">
            <p className="text-white mb-6">
              5 Key insights emerged from these initial tests. Click each insight to see more details.
            </p>

            <div className="space-y-4">
              {/* Accordion 1: Decision making disconnect */}
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="font-bold text-[#3E48AE]">1</span>
                    </div>
                    <h4 className="text-white font-bold">Decision making disconnect</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-white/5">
                    <p className="text-white/80 mb-4 italic">
                      We understood from interviews that informaticists and large health information exchanges had
                      overall data quality as one of their KPIs; and designed a UI to show them the current state of
                      affairs at the very top of the UI.
                    </p>
                    <p className="text-white mb-6">
                      Testing revealed that informaticists weren't often the ones making macro-level decisions, and felt
                      this information was disconnected from the data itself.
                    </p>
                    <div className="w-full">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-wZGWlxCAMyyIGRL1Fdv55twAfw2YYu.png"
                          alt="Decision making disconnect UI showing Mystericorp Tool with 3,000,000 terms"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            13
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 2: Criteria are situational */}
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="font-bold text-[#3E48AE]">2</span>
                    </div>
                    <h4 className="text-white font-bold">Criteria are Situational</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-white/5">
                    <p className="text-white/80 mb-4 italic">
                      Informaticists often share the data cleanup responsibility with non clinically knowledgeable
                      technologists, so we hypothesized the ability to define a 'filter set' would help segment their
                      work into manageable chunks and distribute work to the correct team members.
                    </p>
                    <p className="text-white mb-6">
                      Testing revealed that informaticists time contraints as well as the size of their data set made
                      this extra layer feel cumbersome. We learned criteria was often situational, and not based on
                      knowledge level like we assumed.
                    </p>
                    <div className="w-full">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-evoHFbTDwcvqgcvFItmvrUUaAlIuSr.png"
                          alt="Criteria is situational UI showing filter sets and informaticist quote"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            14
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 3: Forecasts require granular detail */}
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="font-bold text-[#3E48AE]">3</span>
                    </div>
                    <h4 className="text-white font-bold">Forecasts require granular detail</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-white/5">
                    <p className="text-white/80 mb-4 italic">
                      The client assumed that since informatasists were working on data sets with millions of terms,
                      previewing the impact of their work would be a useful step in their process and save them time.
                    </p>
                    <p className="text-white mb-6">
                      Testing revealed that Informatasists didn't clearly understand the 'forecast' concept, and felt it
                      didn't contain enough detail about the medical terms it was forecasting.
                    </p>
                    <div className="w-full">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-7NTGOY29c00ZfwW93IOcEtZQ80prbQ.png"
                          alt="Data forecast interface showing data forecast with COVID-19 quote"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 4: Fluid Expertise */}
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="font-bold text-[#3E48AE]">4</span>
                    </div>
                    <h4 className="text-white font-bold">Fluid Expertise</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-white/5">
                    <p className="text-white/80 mb-4 italic">
                      We assumed Clinical experts in high level domain categories (i.e Procedure) will be
                      assigned/expected to clean that section of a data set.
                    </p>
                    <p className="text-white mb-6">
                      In reality, informaticist expertise was more fluid and often it spans multiple domains, with
                      expertise in medical coding systems, not necessarily specific terminology domains.
                    </p>
                    <div className="w-full">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-KVHHgwUSj1eA6EsVzNDEuB9j2lAVbP.png"
                          alt="Data forecast interface showing confused informaticist with question marks"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            27
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 5: Rapidly Evolving Problems */}
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="font-bold text-[#3E48AE]">5</span>
                    </div>
                    <h4 className="text-white font-bold">Rapidly Evolving Problems</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-white/5">
                    <p className="text-white/80 mb-4 italic">
                      We assumed common sorting patterns would benefit informaticists and there was a regularity and
                      uniformity to the problems they commonly solved.
                    </p>
                    <p className="text-white mb-6">
                      In reality Clinical experts feel frustrated when detail is omitted, and approach their work more
                      tactically. Their focus is often in practice about responding to time sensitive and context
                      dependent problems, like COVID-19, or SARS.
                    </p>
                    <div className="w-full">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acord5-MU8NClppE89fhuVxOFCnlwxyF4oam3.png"
                          alt="Grid of virus and bacteria illustrations with a person in a lab coat"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            28
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto" style={{ marginTop: "3%" }}>
            <p className="text-white text-lg mb-10">
              Based on these findings, we imagined a simpler approach. A single view of all terminology that updated the
              health of the data each time a term was matched, and offered filters optionally instead of as a required
              step.
            </p>

            <div className="w-full">
              <div className="relative w-full">
                <OptimizedImage
                  src="/images/concept-2-animation.gif"
                  alt="Simplified approach visualization"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  unoptimized={true} // GIFs should be unoptimized to preserve animation
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                    16
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* solution Section */}
      <section id="solution" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-black mb-10">Solution</h2>
        <br />
        <h3 className="text-2xl md:text-[30px] font-bold mb-6 relative inline-block">Matching Experience</h3>
        <p className="text-muted-foreground mb-8">
          User research revealed that granular term details are essential to the match decision, and were being
          overlooked in the design. The core task of an Informaticist is to match terms in their system with a universal
          term. My updated design focussed on optimizing that experience.
        </p>

        <p className="text-sm italic text-muted-foreground mb-8">
          Click each tab below to see a concise summary of key features, and the research behind them.
        </p>

        {/* Features Tabs Section */}
        <Tabs defaultValue="progress" className="w-full">
          <div className="bg-muted/30 rounded-lg p-6 border">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto">
              <TabsTrigger value="progress" className="py-3 h-auto">
                Real Time Progress
              </TabsTrigger>
              <TabsTrigger value="quality" className="py-3 h-auto">
                Quality indicator
              </TabsTrigger>
              <TabsTrigger value="filtering" className="py-3 h-auto">
                Contextual filtering
              </TabsTrigger>
              <TabsTrigger value="separation" className="py-3 h-auto">
                Data separation
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Real Time Progress */}
            <TabsContent value="progress" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Users told us evaluating terms that haven't been cleaned up was confusing, so instead we gave them a
                    way to understand their progress in real time as they're cleaning data.
                  </p>
                  <div className="w-full">
                    <div className="relative w-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-8B4chnZsNXzGk7fCbRCWzZJpqLMZPn.png"
                        alt="Real time progress interface showing 86% of 100k term instances matched above 0.98"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                          17
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Quality indicator */}
            <TabsContent value="quality" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Informaticists told us they needed a granular idea of how good a match is, so we gave them a clear
                    visual indicator. (matches above 95% would appear green)
                  </p>
                  <div className="w-full">
                    <div className="relative w-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-6GN6n2zZ0eDliJitsgmCHeoSmMlcSX.png"
                        alt="Quality indicator interface showing match confidence score of 0.99"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                          18
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Contextual filtering */}
            <TabsContent value="filtering" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Instead of asking our users to sort terminology before seeing it, we gave them a grid that made
                    sorting and filtering contextual, based on the factors interviewees mentioned as being most
                    important to their workflow.
                  </p>
                  <div className="w-full">
                    <div className="relative w-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-KVwA3gsPkq74NDfqgFN1tooD9bYvs3.png"
                        alt="Contextual filtering interface showing universal dictionary description"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                          19
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 4: Data separation */}
            <TabsContent value="separation" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Research about alternative tools revealed confusion as to whether users were looking at a universal
                    dictionary term, or a term they sent to be cleaned. My design clarifies this distinction. The term
                    the client sends in appears on the left, and the right hand side of the UI is devoted to the match
                    in the universal dictionary.
                  </p>
                  <div className="w-full">
                    <div className="relative w-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-EmXAXH6LhHERBA8Ew7mO1r6mb63ieh.png"
                        alt="Data separation interface showing YOUR DATA and POSSIBLE MATCHES columns"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full" style={hideNumberStyle}>
                          20
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
          <p className="text-xs text-gray-500 italic mt-4 text-center">
            UI has been white-labeled to protect client trade secrets
          </p>
        </Tabs>
      </section>
      {/* Semantic Descriptions Section */}
      {/* Match Details Section with Steelblue Background */}
      <section className="w-full bg-[#BDE9FF] py-16 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-[30px] font-bold mb-6 relative inline-block">The Match Decision</h3>
          <p className="text-gray-800 mb-10">The match view we designed is telling the Informaticist 3 things;</p>

          <div className="bg-[rgb(189,233,255)] rounded-lg p-6 border border-black/30">
            <div className="space-y-4">
              {/* Accordion 1 */}
              <div className="border border-black/30 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-[#B1DDFC] hover:bg-[#A5DFFF]">
                    <h4 className="text-gray-800 font-medium">How confident are we in this potential match?</h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-gray-800 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-[#C6E8FD]">
                    <p className="text-gray-800">
                      Informaticists despite wanting to comb through descriptions and codes did still consistently
                      mention and refer to the score in their decision because data quality KPIs from their
                      organizations generally used match confidence scores.
                    </p>

                    <div className="w-full mt-4">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-YwNrN6pfmpIFMPaJykRwPv55PaVvJR.png"
                          alt="Match confidence interface showing detailed term matching with 0.99 score"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            21
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
              {/* Accordion 2 */}
              <div className="border border-black/30 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-[#B1DDFC] hover:bg-[#A5DFFF]">
                    <h4 className="text-gray-800 font-medium">
                      What are the codes from other languages this universalsal term covers?
                    </h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-gray-800 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-[#C6E8FD]">
                    <p className="text-gray-800">
                      We heard from numerous informaticists even those without clinical expertise that they rely on the
                      codes, and even some memorize these numbers for frequent issues.
                    </p>

                    <div className="w-full mt-4">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-nMSs6AJ4qZsrqRGYcAlCMUHp9iciwg.png"
                          alt="Standard codes interface showing LOINC code 34660-1"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            22
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              <div className="border border-black/30 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-4 p-4 cursor-pointer bg-[#B1DDFC] hover:bg-[#A5DFFF]">
                    <h4 className="text-gray-800 font-medium">
                      What are the descriptions associated with each associated code?
                    </h4>
                    <div className="ml-auto">
                      <svg
                        className="w-5 h-5 text-gray-800 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 bg-[#C6E8FD]">
                    <p className="text-gray-800">
                      Testing revealed that for many hospitals and specialties, it was important to compare semantic
                      descriptions from{" "}
                      <span className="bg-red-500 text-white px-[10px] font-bold rounded-[10px]">
                        associated standard codes
                      </span>{" "}
                      in addition of the universal match description;{" "}
                      <span className="bg-[color:hsl(var(--steelblue))] text-white px-[10px] font-bold rounded-[10px]">
                        universal match description
                      </span>{" "}
                      as they often contain relevant info omitted by the universal description.
                    </p>

                    <div className="w-full mt-4">
                      <div className="relative w-full">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-BcCreOfPoZxctBAUtuSmGIYChkTfUd.png"
                          alt="Semantic descriptions interface showing Hemoglobin descriptions"
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-5xl font-bold bg-white/70 px-5 py-2 rounded-full"
                            style={hideNumberStyle}
                          >
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="results-recommendations" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-black mb-10">Results & Recommendations</h2>

        <p className="text-muted-foreground mb-12">
          I observed a massive usability improvement between the first and second designs we put in front of users, in
          ease of use, and likelihood of adoption.
        </p>

        {/* Metrics Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 metrics-comparison" data-animate>
          {/* Metric 1 */}
          <div>
            <p className="text-xl font-medium mb-4">
              How easy was it to match terms using the tool? (on a scale of 1-10)
            </p>
            <p className="text-muted-foreground mb-4">23% increase from my initial design</p>

            <div className="space-y-4">
              <AnimatedBar percentage={48} color="bg-yellow-200" value="4.8" />
              <AnimatedBar percentage={71} color="bg-green-400" value="7.1" />
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <p className="text-xl font-medium mb-4">
              How likely would you be to use a tool like this in your everyday workflow? (on a scale of 1-10)
            </p>
            <p className="text-muted-foreground mb-4">25% increase from my initial design</p>

            <div className="space-y-4">
              <AnimatedBar percentage={57} color="bg-yellow-200" value="5.7" />
              <AnimatedBar percentage={82} color="bg-green-400" value="8.2" />
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-12">
          As part of our presentation to stakeholders, our team put together a comprehensive list of recommendations and
          next steps to stakeholders to support ongoing improvement of the tool.
        </p>

        {/* Recommendations */}
        <div className="space-y-6">
          {/* Recommendation 1 */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row gap-6" data-animate>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <div className="w-16 h-16 relative">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-200 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground">
                Design should study the subgroups within this new "big data" market. Understanding if commonalities
                exist in the customizations different groups are using in their workflows will prevent expensive custom
                builds.
              </p>
            </div>
          </div>

          {/* Recommendation 2 */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row gap-6" data-animate>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <div className="w-16 h-16 relative">
                <svg
                  className="h-16 w-16 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground">
                To sell this tool to administrators in the future, a study should be conducted to understand and
                identify what specific KPIs administrators are most interested in and how those affect operational
                staffing decisions.
              </p>
            </div>
          </div>

          {/* Recommendation 3 */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row gap-6" data-animate>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <div className="w-16 h-16 relative">
                <Search className="h-16 w-16 text-red-300" />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground">
                There's an opportunity to study and categorize individual match escalation decisions, to compare actual
                user behavior to what informaticists tell researchers they need to match more efficiently.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-12">
          Thanks for reading. There's lots more detail I'd love to share with you about this 18 month effort; so reach
          out and let's talk!
        </p>
      </div>
    </>
  )
}
