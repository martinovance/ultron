import { CartContext } from "@/context/addToCartContext"
import { useContext } from "react"

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("Context must be used within a CartProvider")
  }
  return context
}
