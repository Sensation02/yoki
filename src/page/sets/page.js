import React, { useState, useEffect } from 'react'
import Meals from '../../components/meals/Meals'
import SectionHeading from '../../components/ui/SectionHeading'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { sushiRolls, sushiSetIngredients } from '../../data/data'
import { useSelector, useDispatch } from 'react-redux'
import {
  addSushiRoll,
  removeSushiRoll,
  addSushiRollIngredients,
  removeSushiRollIngredients,
} from '../../redux/slices/sushisetSlice'
import './style.scss'

const Sets = () => {
  // далі робота з redux toolkit
  // отримуємо дані з redux store
  const sushiSet = useSelector((state) => state.sushiSet)
  const dispatch = useDispatch()

  // витягуємо дані з data.js
  const [rolls, setSushiRolls] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    setSushiRolls(sushiRolls)
    setIngredients(sushiSetIngredients)
  }, [])

  // функція обчислення суми суші сету (суші роли + інгредієнти)
  const calculateTotalPrice = () => {
    let totalPrice = 0
    sushiSet.forEach((rollName) => {
      const roll = sushiRolls.find((roll) => roll.name === rollName)
      if (roll) {
        totalPrice += roll.price
      }
    }) // додаємо суші роли
    sushiSet.forEach((ingredientName) => {
      const ingredient = sushiSetIngredients.find(
        (ingredient) => ingredient.name === ingredientName,
      )
      if (ingredient) {
        totalPrice += ingredient.price
      }
    }) // додаємо інгредієнти
    return totalPrice
  }

  // функція обробки зміни чекбокса (додаємо суші роли в суші сет та видаляємо їх)
  const handleAddRoll = (event) => {
    const { value, checked } = event.target
    if (checked) {
      dispatch(addSushiRoll(value))
    } else {
      dispatch(removeSushiRoll(value))
    }
  }

  // функція обробки зміни чекбокса (додаємо інгредієнти в суші сет)
  const handleAddIngredients = (event) => {
    const { value, checked } = event.target
    if (checked) {
      dispatch(addSushiRollIngredients(value))
    } else {
      dispatch(removeSushiRollIngredients(value))
    }
  }

  // #region робота з хендлерами і функціями
  // const [sushiSet, setSushiSet] = useState([])
  // const [ingredients, setIngredients] = useState([])

  // useEffect(() => {
  //   setIngredients(sushiSetIngredients)
  // }, [])

  // const handleCheckboxChange = (event) => {
  //   const { value, checked } = event.target
  //   if (checked) {
  //     setSushiSet((prevSet) => [...prevSet, value])
  //   } else {
  //     setSushiSet((prevSet) => prevSet.filter((item) => item !== value))
  //   }
  // }

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0
  //   sushiSet.forEach((rollName) => {
  //     const roll = sushiRolls.find((roll) => roll.name === rollName)
  //     if (roll) {
  //       totalPrice += roll.price
  //     }
  //   })
  //   return totalPrice
  // }
  // #endregion

  return (
    <section>
      <Meals meal='sushi' />
      <br />
      <SectionHeading
        title='Build your sushi set'
        subtitle='Sushi constructor'
      />
      <div className='sets-constructor'>
        <div className='sets-constructor__item'>
          <Card className='meal-card'>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image=''
                alt=''
                className='img sushi__image'
              />
              <CardContent>
                <Typography gutterBottom variant='h4' component='div'>
                  Your set
                </Typography>
                <Typography gutterBottom variant='h6' component='div'>
                  Rolls:
                  <ul>
                    {sushiSet.map((rollName) => (
                      <li key={rollName}>{rollName}</li>
                    ))}
                  </ul>
                </Typography>
                <Typography variant='h5' color='text.primary'>
                  Total Price: {calculateTotalPrice()}$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='sets-constructor__item'>
          <Box sx={{ display: 'flex' }}>
            <FormControl
              sx={{
                m: 3,
              }}
              component='fieldset'
              variant='standard'
            >
              <FormLabel
                component='legend'
                sx={{
                  '&.Mui-checked': {
                    color: 'red',
                  },
                  '.MuiFormLabel-colorSecondary': {
                    color: 'red',
                  },
                }}
              >
                Add rolls to your set
              </FormLabel>
              <FormGroup>
                {rolls.map((roll) => (
                  <FormControlLabel
                    key={roll.name}
                    control={
                      <Checkbox
                        checked={sushiSet.includes(roll.name)}
                        onChange={handleAddRoll}
                        value={roll.name}
                        sx={{
                          '&.Mui-checked': {
                            color: 'red',
                          },
                        }}
                      />
                    }
                    label={roll.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </div>
        <div className='sets-constructor__item'>
          <Box sx={{ display: 'flex' }}>
            <FormControl
              sx={{
                m: 3,
              }}
              component='fieldset'
              variant='standard'
            >
              <FormLabel
                component='legend'
                sx={{
                  '&.Mui-checked': {
                    color: 'red',
                  },
                  '.MuiFormLabel-colorSecondary': {
                    color: 'red',
                  },
                }}
              >
                Add rolls to your set
              </FormLabel>
              <FormGroup>
                {ingredients.map((ingredient) => (
                  <FormControlLabel
                    key={ingredient.name}
                    control={
                      <Checkbox
                        checked={sushiSet.includes(ingredient.name)}
                        onChange={handleAddIngredients}
                        value={ingredient.name}
                        sx={{
                          '&.Mui-checked': {
                            color: 'red',
                          },
                        }}
                      />
                    }
                    label={ingredient.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default Sets
