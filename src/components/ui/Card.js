import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AddButton from './AddButton'

const MealCard = ({ id, name, ingredients, image, price }) => {
  const ingredientsList = ingredients.map((ingredient) => (
    <li className='meal-card__ingredient'>{ingredient}</li>
  ))

  return (
    <Card key={id} className='meal-card'>
      <CardMedia component='img' height='140' image={image} alt='' />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
        component='div'
      >
        <Typography gutterBottom variant='h6' component='div'>
          {name}
        </Typography>
        {ingredients && (
          <Typography variant='text' color='text.primary'>
            {ingredientsList}
          </Typography>
        )}
        <Typography variant='h6' color='text.primary'>
          {price}$
        </Typography>
      </CardContent>
      <AddButton id={id} name={name} image={image} price={price} />
    </Card>
  )
}

export default MealCard
