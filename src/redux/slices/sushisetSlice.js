import { createSlice } from '@reduxjs/toolkit'

// пустий масив для зберігання об'єктів суші сетів
const initialState = []

// створюємо суші сети
const sushisetSlice = createSlice({
  name: 'sushiset',
  initialState,
  reducers: {
    // додаємо суші роли в суші сет
    addSushiRoll(state, action) {
      const sushiRoll = action.payload
      state.push(sushiRoll)
    },
    // видаляємо суші роли з суші сет
    removeSushiRoll(state, action) {
      const sushiRoll = action.payload
      return state.filter((roll) => roll !== sushiRoll)
    },
    // додаємо додаткові інгредієнти в суші сет
    addSushiRollIngredients(state, action) {
      const sushiRollIngredients = action.payload
      state.push(sushiRollIngredients)
    },
    // видаляємо додаткові інгредієнти з суші сет
    removeSushiRollIngredients(state, action) {
      const sushiRollIngredients = action.payload
      return state.filter((ingredient) => ingredient !== sushiRollIngredients)
    },
  },
})

// експортуємо екшени
export const {
  addSushiRoll,
  removeSushiRoll,
  addSushiRollIngredients,
  removeSushiRollIngredients,
} = sushisetSlice.actions

// експортуємо редюсер
export default sushisetSlice.reducer
