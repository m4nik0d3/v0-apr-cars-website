import type React from "react"
import { LucidePhone } from "lucide-react"

export function Phone({ className, ...props }: React.ComponentProps<typeof LucidePhone>) {
  return <LucidePhone className={className} {...props} />
}
