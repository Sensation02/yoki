import { createSlice } from '@reduxjs/toolkit'

// пустий масив для зберігання об'єктів суші сетів
const initialState = {
  sushiset: {
    rolls: [],
    ingredients: [],
  },
}

// створюємо суші сети
const sushisetSlice = createSlice({
  name: 'sushiset',
  initialState,
  reducers: {
    // додаємо суші роли в суші сет
    addSushiRoll(state, action) {
      state.sushiset.rolls.push(action.payload)
    },
    // видаляємо суші роли з суші сет
    removeSushiRoll(state, action) {
      state.sushiset.rolls = state.sushiset.rolls.filter(
        (roll) => roll !== action.payload,
      )
    },
    // додаємо інгредієнти в суші сет
    addSushiRollIngredients(state, action) {
      state.sushiset.ingredients.push(action.payload)
    },
    // видаляємо інгредієнти з суші сет
    removeSushiRollIngredients(state, action) {
      state.sushiset.ingredients = state.sushiset.ingredients.filter(
        (ingredient) => ingredient !== action.payload,
      )
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
