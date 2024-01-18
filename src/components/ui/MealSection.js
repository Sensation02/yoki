import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import MealCard from '../ui/Card'

const MealSection = ({ data, title, subtitle }) => {
  return (
    <div className='meals-container'>
      <SectionHeading title={title} subtitle={subtitle} />
      <div className='meals-container__grid'>
        {data.map((meal) => (
          <MealCard
            id={meal.id}
            name={meal.name}
            ingredients={meal.ingredients}
            image={meal.image}
          />
        ))}
      </div>
    </div>
  )
}

export default MealSection
