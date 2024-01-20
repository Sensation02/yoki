import { createSlice } from '@reduxjs/toolkit'

// редюсер для додавання товару в корзину
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // початковий стан кошика, вона пуста
    cart: [],
  },
  reducers: {
    // додавання товару в корзину
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    // збільшення кількості товару в корзині на 1 (коли ми хочемо взяти не 1 одиницю товару, а 2, 3 і т.д.)
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
    },
    // зменшення кількості товару в корзині на 1
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    // видалення всього товару одного типу з корзини
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions
