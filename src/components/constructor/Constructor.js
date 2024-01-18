import React from 'react'
import useConstructor from '../../utils/useConstructor'
import {
  sushiRolls,
  sushiSetIngredients,
  pizzaIngredients,
  // pizzaSauces,
  // pizzaSizes,
} from '../../data/data'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from '@mui/material'

const Constructor = ({ type }) => {
  const { sushiset, handleRoll, handleSetIngredients, calculateSetTotalPrice } =
    useConstructor(type)

  const {
    pizza,
    pizzaSauce,
    pizzaSize,
    handlePizzaIngredients,
    handlePizzaSauce,
    handlePizzaSize,
    calculatePizzaTotalPrice,
  } = useConstructor(type)

  return type === 'sushi' ? (
    <div className='constructor'>
      <div className='constructor__item'>
        <Card className='meal-card'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='../assets/SushiSet.jpg'
              alt=''
              className='img'
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='div'>
                Your set
              </Typography>

              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '4rem',
                  justifyContent: 'space-between',
                }}
              >
                <Typography gutterBottom variant='h6' component='div'>
                  Rolls:
                  <ul>
                    {sushiset
                      .filter((item) =>
                        sushiRolls.find((roll) => roll.name === item),
                      )
                      .map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                  </ul>
                </Typography>
                <Typography gutterBottom variant='h6' component='div'>
                  Additional ingredients:
                  <ul>
                    {sushiSetIngredients
                      .filter((ingredient) =>
                        sushiset.includes(ingredient.ingredientName),
                      )
                      .map((ingredient) => (
                        <li key={ingredient.ingredientName}>
                          {ingredient.ingredientName}
                        </li>
                      ))}
                  </ul>
                </Typography>
              </CardContent>

              <Typography variant='h4' color='text.primary'>
                Total Price: {calculateSetTotalPrice()}$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className='constructor__item'>
        <Box sx={{ display: 'flex' }}>
          <FormControl
            sx={{
              m: 3,
            }}
            component='fieldset'
            variant='standard'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Add rolls to your set
            </Typography>
            <FormGroup>
              {sushiRolls.map((roll) => (
                <FormControlLabel
                  key={roll.name}
                  control={
                    <Checkbox
                      checked={sushiset.includes(roll.name)}
                      onChange={handleRoll}
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
      <div className='constructor__item'>
        <Box sx={{ display: 'flex' }}>
          <FormControl
            sx={{
              m: 3,
            }}
            component='fieldset'
            variant='standard'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Add ingredients to your set
            </Typography>
            <FormGroup>
              {sushiSetIngredients.map((ingredient) => (
                <FormControlLabel
                  key={ingredient.ingredientName}
                  control={
                    <Checkbox
                      checked={sushiset.includes(ingredient.ingredientName)}
                      onChange={handleSetIngredients}
                      value={ingredient.ingredientName}
                      sx={{
                        '&.Mui-checked': {
                          color: 'red',
                        },
                      }}
                    />
                  }
                  label={ingredient.ingredientName}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </div>
    </div>
  ) : (
    <div className='constructor'>
      <div className='constructor__item'>
        <Card className='meal-card'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image=''
              alt=''
              className='img pizza__image'
            />
            <CardContent>
              <Typography gutterBottom variant='h4' component='div'>
                Your Pizza
              </Typography>
              <CardContent className='pizza__ingredients'>
                <Typography gutterBottom variant='h6' component='div'>
                  Ingredients:
                  <ul>
                    {pizzaIngredients
                      .filter((ingredient) =>
                        pizza.includes(ingredient.ingredientName),
                      )
                      .map((ingredient) => (
                        <li key={ingredient.ingredientName}>
                          {ingredient.ingredientName}
                        </li>
                      ))}
                  </ul>
                </Typography>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                  sx={{ display: 'flex', gap: '0.5rem' }}
                >
                  Sauce: {pizzaSauce}
                </Typography>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                  sx={{ display: 'flex', gap: '0.5rem' }}
                >
                  Size: {pizzaSize}
                </Typography>
              </CardContent>

              <Typography variant='h4' color='text.primary'>
                Total Price: {calculatePizzaTotalPrice()}$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className='constructor__item'>
        <Box sx={{ display: 'flex' }}>
          <FormControl
            sx={{
              m: 3,
            }}
            component='fieldset'
            variant='standard'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Add pizza ingredients
            </Typography>
            <FormGroup>
              {pizzaIngredients.map((ingredient) => (
                <FormControlLabel
                  key={ingredient.ingredientName}
                  control={
                    <Checkbox
                      checked={pizza.includes(ingredient.ingredientName)}
                      onChange={handlePizzaIngredients}
                      value={ingredient.ingredientName}
                      sx={{
                        '&.Mui-checked': {
                          color: 'red',
                        },
                      }}
                    />
                  }
                  label={ingredient.ingredientName}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </div>
      <div className='constructor__item'>
        <Box sx={{ display: 'flex' }}>
          <FormControl
            sx={{
              m: 3,
            }}
            component='fieldset'
            variant='standard'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Choose pizza sauce
            </Typography>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              value={pizzaSauce}
              onChange={handlePizzaSauce}
            >
              <FormControlLabel
                value='Tomato sauce'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='Tomato sauce'
              />
              <FormControlLabel
                value='White sauce'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='White sauce'
              />
              <FormControlLabel
                value='Spicy sauce'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='Spicy sauce'
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <FormControl
            component='fieldset'
            variant='standard'
            sx={{
              m: 3,
            }}
          >
            <Typography gutterBottom variant='h5' component='div'>
              Choose pizza size
            </Typography>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              value={pizzaSize}
              onChange={handlePizzaSize}
            >
              <FormControlLabel
                value='Small'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='Small'
              />
              <FormControlLabel
                value='Medium'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='Medium'
              />
              <FormControlLabel
                value='Large'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: 'red',
                      },
                    }}
                  />
                }
                label='Large'
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </div>
    </div>
  )
}

export default Constructor
