import React, { useState, useEffect } from 'react'
import SectionHeading from '../ui/SectionHeading'
import MealCard from '../ui/Card'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

const MealSection = ({ data, title, subtitle }) => {
  const [mealsPerPage, setMealsPerPage] = useState(3) // скільки карток на сторінці
  const [pagination, setPagination] = useState({
    count: data.length, // скільки всього карток
    from: 0, // звідки починаємо
    to: mealsPerPage, // куди рухаємось
  })

  // зміна кількості карток на сторінці в залежності від розміру екрану
  useEffect(() => {
    const updateMealsPerPage = () => {
      let newMealsPerPage
      if (window.innerWidth < 570) {
        newMealsPerPage = 1
      } else if (window.innerWidth < 850) {
        newMealsPerPage = 2
      } else if (window.innerWidth < 1120) {
        newMealsPerPage = 3
      } else if (window.innerWidth < 1390) {
        newMealsPerPage = 4
      } else if (window.innerWidth < 1670) {
        newMealsPerPage = 5
      } else {
        newMealsPerPage = 6
      }
      setMealsPerPage(newMealsPerPage)
      setPagination((prevPagination) => ({
        ...prevPagination,
        to: newMealsPerPage,
      }))
    }
    updateMealsPerPage()
    window.addEventListener('resize', updateMealsPerPage)
    return () => window.removeEventListener('resize', updateMealsPerPage)
  }, [])

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
    setPagination((prevPagination) => ({
      ...prevPagination,
      count: data.length,
    }))
  }, [pagination.from, pagination.to, data.length])

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
