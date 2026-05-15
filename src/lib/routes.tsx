import type { ReactNode } from "react"
import Home from "../pages/Home"

export type RoutePath = {
  path: string
  element: ReactNode
}

export const routePaths: RoutePath[] = [
  { path: "/", element: <Home /> },
]
