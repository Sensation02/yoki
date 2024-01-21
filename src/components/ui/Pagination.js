import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PagePagination = ({
  mealsPerPage,
  totalMealsCount,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalMealsCount / mealsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Stack spacing={2}>
      <Pagination
        color='error'
        count={pageNumbers}
        defaultPage={1}
        page={currentPage}
        onChange={paginate}
      />
    </Stack>
  )
}

export default PagePagination
