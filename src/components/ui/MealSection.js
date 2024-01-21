import React, { useState, useEffect } from 'react'
import SectionHeading from '../ui/SectionHeading'
import MealCard from '../ui/Card'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

const MealSection = ({ data, title, subtitle }) => {
  const [mealsPerPage] = useState(3) // скільки карток на сторінці
  // стейт для визначення скільки всього карток (довжина дати), звідки починаємо і куди рухаємось
  const [pagination, setPagination] = useState({
    count: data.length,
    from: 0,
    to: mealsPerPage,
  })

  // хендлер для пагінації
  const handlePageChange = (event, page) => {
    const from = (page - 1) * mealsPerPage // звідки починаємо
    const to = (page - 1) * mealsPerPage + mealsPerPage // куди рухаємось

    setPagination({ ...pagination, from: from, to: to })
  }

  // скільки буде сторінок
  const pages = Math.ceil(data.length / mealsPerPage)

  // відображення даних залежно від пагінації
  useEffect(() => {
    setPagination({ ...pagination, count: data.length })
  }, [pagination.from, pagination.to, data.length, pagination])

  // зображуємо картки на сторінці
  data = data.slice(pagination.from, pagination.to)

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
            price={meal.price}
          />
        ))}
      </div>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Pagination count={pages} onChange={handlePageChange} defaultPage={1} />
      </Box>
    </div>
  )
}

export default MealSection
