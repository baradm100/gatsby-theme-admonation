import { CSSProperties, ReactNode } from "react"

export interface CardProps {
  title?: string
  path: string
  featuredImage?: any
  content?: string
  meta?: {
    time: string
    timePretty: string
    tag: string | null
    readTime?: string | number
  }
  halfImage?: boolean
  compact?: boolean
  style?: CSSProperties
  children?: ReactNode
}
