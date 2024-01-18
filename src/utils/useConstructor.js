import { useState } from 'react'
import {
  sushiRolls,
  sushiSetIngredients,
  pizzaIngredients,
  pizzaSauces,
  pizzaSizes,
} from '../data/data'

const useConstructor = () => {
  // стани для сету або піци
  const [sushiset, setSushiset] = useState([])
  const [pizza, setPizza] = useState([])
  const [pizzaSize, setPizzaSize] = useState(null)
  const [pizzaSauce, setPizzaSauce] = useState(null)

  // #region sushiset
  // додаємо роли в сет
  const handleRoll = (event) => {
    const rollName = event.target.value
    if (event.target.checked) {
      setSushiset([...sushiset, rollName])
    } else {
      setSushiset(sushiset.filter((roll) => roll !== rollName))
    }
  }

  // додаємо інгредієнти в суші сет
  const handleSetIngredients = (event) => {
    const ingredientName = event.target.value
    if (event.target.checked) {
      setSushiset([...sushiset, ingredientName])
    } else {
      setSushiset(
        sushiset.filter((ingredient) => ingredient !== ingredientName),
      )
    }
  }
  // #endregion

  // #region pizza
  // додаємо інгредієнти в піцу
  const handlePizzaIngredients = (event) => {
    const ingredientName = event.target.value
    if (event.target.checked) {
      setPizza([...pizza, ingredientName])
    } else {
      setPizza(pizza.filter((ingredient) => ingredient !== ingredientName))
    }
  }

  // вибираємо соуси в піцу (вибір одного забирає вибір іншого)
  const handlePizzaSauce = (event) => {
    const sauceName = event.target.value
    if (event.target.checked) {
      setPizzaSauce(sauceName)
    } else {
      setPizzaSauce(null)
    }
  }

  // вибираємо розмір піци (вибір одного забирає вибір іншого)
  const handlePizzaSize = (event) => {
    const sizeName = event.target.value
    if (event.target.checked) {
      setPizzaSize(sizeName)
    } else {
      setPizzaSize(null)
    }
  }
  // #endregion

  // #region розрахунок вартості
  // рахуємо загальну вартість сету або піци
  const calculateSetTotalPrice = () => {
    let totalPrice = 0

    // додаємо вартість ролів в сеті
    sushiset.forEach((rollName) => {
      const roll = sushiRolls.find((roll) => roll.name === rollName)
      if (roll) {
        totalPrice += roll.price
      }
    })

    // додаємо вартість інгредієнтів в сеті
    sushiset.forEach((ingredientName) => {
      const ingredient = sushiSetIngredients.find(
        (ingredient) => ingredient.ingredientName === ingredientName,
      )
      if (ingredient) {
        totalPrice += ingredient.price
      }
    })

    return totalPrice
  }

  // рахуємо загальну вартість піци
  const calculatePizzaTotalPrice = () => {
    let totalPrice = 0
    pizza.forEach((item) => {
      totalPrice += pizzaIngredients.find(
        (ingredient) => ingredient.ingredientName === item,
      ).price
    })
    if (pizzaSize) {
      totalPrice += pizzaSizes.find((size) => size.name === pizzaSize).price
    }
    if (pizzaSauce) {
      totalPrice += pizzaSauces.find((sauce) => sauce.name === pizzaSauce).price
    }
    return totalPrice
  }
  // #endregion

  return {
    sushiset,
    pizza,
    pizzaSize,
    pizzaSauce,
    handleRoll,
    handleSetIngredients,
    handlePizzaIngredients,
    handlePizzaSauce,
    handlePizzaSize,
    calculateSetTotalPrice,
    calculatePizzaTotalPrice,
  }
}

export default useConstructor
