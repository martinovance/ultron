import React, { useState, createContext, useMemo, ReactNode } from "react"

type DrawerState = {
  drawerName: string
  data: Record<string, unknown> | null
}

type DrawerContextType = {
  state: DrawerState
  setState: React.Dispatch<React.SetStateAction<DrawerState>>
}

export const DrawerContext = createContext<DrawerContextType | null>(null)

type DrawerContextProviderProps = {
  children: ReactNode
}

function DrawerContextProvider({ children }: DrawerContextProviderProps) {
  const [state, setState] = useState<DrawerState>({
    drawerName: "",
    data: null,
  })

  const value = useMemo(() => ({ state, setState }), [state])

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}

export default DrawerContextProvider
