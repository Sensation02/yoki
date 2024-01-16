import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import MealCard from '../ui/Card'
import { sushiRolls, pizzas } from '../../data/data'

import './style.scss'

const Meals = () => {
  const data = [sushiRolls, pizzas]
  return (
    <section className='meals'>
      <div className='meals-container'>
        <SectionHeading title='Sushi' subtitle='人気のメニュー' />
        <div className='meals-container__grid'>
          {data[0].map((meal) => (
            <MealCard
              id={meal.id}
              name={meal.name}
              ingredients={meal.ingredients}
              media='img sushi__image'
            />
          ))}
        </div>
      </div>
      <div className='meals-container'>
        <SectionHeading title='Pizza' subtitle='人気のあるカテゴリ' />
        <div className='meals-container__grid'>
          {data[1].map((meal) => (
            <MealCard
              id={meal.id}
              name={meal.name}
              ingredients={meal.ingredients}
              media='img pizza__image'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Meals
