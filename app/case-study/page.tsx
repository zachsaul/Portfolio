import CaseStudy from "../../case-study"
import AnimatedFooter from "@/components/animated-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Quality Tool Case Study - Zach Saul",
  description:
    "Case study on designing a smarter tool for medical informaticists, improving data quality in healthcare systems.",
  keywords: ["Healthcare", "Data Quality", "UX Design", "Medical Informaticists", "Case Study"],
}

export default function DataQualityToolPage() {
  return (
    <>
      <CaseStudy />
      <AnimatedFooter />
    </>
  )
}
