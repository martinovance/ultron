export interface LikedItemsContextType {
  likedItems: number[]
  handleLike: (id: number) => void
}

export interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  totalPrice: number
}
