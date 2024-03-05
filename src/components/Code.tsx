import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { ReactNode } from "react"

interface CodeCrad{
    children:ReactNode
    heading?:ReactNode
}
export function CodeCard({children,heading}:CodeCrad) {
  return (
    <Alert className="max-w-2xl bg-zinc-900">
    
      <Terminal className="h-4 w-4" />
      <AlertTitle>{heading}</AlertTitle>
      <AlertDescription>
       {children}
      </AlertDescription>
    </Alert>
  )
}
