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
          image='sushi__image'
        />
      )}
      {meal === 'pizza' && (
        <MealSection
          data={pizzas}
          title='Pizzas'
          subtitle='人気のあるカテゴリ'
          image='pizza__image'
        />
      )}
      {meal === 'both' && (
        <>
          <MealSection
            data={sushiRolls}
            title='Sushi Rolls'
            subtitle='人気のあるカテゴリ'
            image='sushi__image'
          />
          <MealSection
            data={pizzas}
            title='Pizzas'
            subtitle='人気のあるカテゴリ'
            image='pizza__image'
          />
        </>
      )}
    </section>
  )
}

export default Meals
