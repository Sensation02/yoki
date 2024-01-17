import { configureStore } from '@reduxjs/toolkit'

import sushiSetReducer from './slices/sushisetSlice'

// створюємо store
export const store = configureStore({
  reducer: {
    sushiSet: sushiSetReducer,
  },
})
