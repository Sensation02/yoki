import React from 'react'
import MealSection from '../ui/MealSection'
import { sushiRolls, pizzas } from '../../data/data'

import './style.scss'

const Meals = ({ meal }) => {
  return (
    <section className='meals'>
      {meal === 'sushi' && (
        <MealSection
          data={sushiRolls}
          title='Sushi Rolls'
          subtitle='人気のあるカテゴリ'
          type={meal}
        />
      )}
      {meal === 'pizza' && (
        <MealSection
          data={pizzas}
          title='Pizzas'
          subtitle='人気のあるカテゴリ'
          type={meal}
        />
      )}
      {meal === 'both' && (
        <>
          <MealSection
            data={sushiRolls}
            title='Sushi Rolls'
            subtitle='人気のあるカテゴリ'
            type={meal}
          />
          <MealSection
            data={pizzas}
            title='Pizzas'
            subtitle='人気のあるカテゴリ'
            type={meal}
          />
        </>
      )}
    </section>
  )
}

export default Meals
