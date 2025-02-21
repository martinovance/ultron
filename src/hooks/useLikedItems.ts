import { LikedItemsContext } from "@/context/likedItemsContext"
import { useContext } from "react"

export function useLikedItems() {
  const context = useContext(LikedItemsContext)
  if (!context) {
    throw new Error("useLikedItems must be used within a LikedItemsProvider")
  }
  return context
}
