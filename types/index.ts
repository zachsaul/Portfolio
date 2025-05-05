// Define types for the AnimatedBar component
export interface AnimatedBarProps {
  percentage: number
  color: string
  value: string
}

// Define types for tab state
export interface TabState {
  activeTab: string
  problemTab: string
  insightTab: string
  [key: string]: string
}
