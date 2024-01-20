import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// ці іпморти використовуються для збереження даних в localStorage

// конфігурація для redux-persist (для збереження даних в localStorage)
const persistConfig = {
  key: 'root',
  storage,
}

// створюємо персистентний редюсер (зберігає дані в localStorage)
const persistedReducer = persistReducer(persistConfig, cartReducer)

// створюємо store з персистентним редюсером, який містить наші редюсери зі всіма actions і initialState з них (для збереження даних в localStorage)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
