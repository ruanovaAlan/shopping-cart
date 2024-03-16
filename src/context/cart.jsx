import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContex = createContext()

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContex.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContex.Provider>
  )
}
