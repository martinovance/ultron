import { DrawerContext } from "@/context/drawerContext"
import { useContext } from "react"

const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error("useDrawer must be used within a DrawerContextProvider")
  }

  return [context.state, context.setState] as const
}

export default useDrawer
