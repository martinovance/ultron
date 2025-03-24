import { LikedItemsContextType } from "@/types/MarketItemTypes"
import { createContext, useState, ReactNode, useEffect } from "react"

export const LikedItemsContext = createContext<
  LikedItemsContextType | undefined
>(undefined)

export function LikedItemsProvider({ children }: { children: ReactNode }) {
  const [likedItems, setLikedItems] = useState<number[]>(() => {
    const storedLikes = localStorage.getItem("likedItems")
    return storedLikes ? JSON.parse(storedLikes) : []
  })

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems))
  }, [likedItems])

  const handleLike = (id: number) => {
    setLikedItems((prev) => {
      const updatedLikes = prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]

      localStorage.setItem("likedItems", JSON.stringify(updatedLikes))
      return updatedLikes
    })
  }

  return (
    <LikedItemsContext.Provider value={{ likedItems, handleLike }}>
      {children}
    </LikedItemsContext.Provider>
  )
}
