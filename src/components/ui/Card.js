import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const MealCard = ({ id, name, ingredients, media }) => {
  const ingredientsList = ingredients.map((ingredient) => (
    <li className='meal-card__ingredient'>{ingredient}</li>
  ))

  return (
    <Card key={id} className='meal-card'>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image=''
          alt=''
          className={media}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body' color='text.primary'>
            {ingredientsList}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MealCard
