import './style.scss'
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../redux/slices/cartSlice.js'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Minus, Plus } from 'lucide-react'

function CartItem({ id, image, name, price, quantity = 0 }) {
  // в CartItem нам потрібно передати id товару, щоб знати який товар збільшувати або зменшувати, його картинку, назву, ціну і кількість

  const dispatch = useDispatch()

  return (
    <div className='cartItem'>
      <Card sx={{ maxWidth: 345, width: '100%' }}>
        <CardMedia sx={{ height: 140 }} image={image} title='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            {price}$
          </Typography>
        </CardContent>
        <CardActions className='fold'>
          <IconButton
            size='small'
            color='error'
            onClick={() => dispatch(decrementQuantity(id))}
            className='fold__button'
            variant='contained'
          >
            <Minus size={12} />
          </IconButton>
          <p style={{ padding: 0, margin: 0 }}>{quantity}</p>
          <IconButton
            size='small'
            color='error'
            onClick={() => dispatch(incrementQuantity(id))}
            className='fold__button'
            variant='contained'
            style={{ margin: 0 }}
          >
            <Plus size={12} />
          </IconButton>
          <Button
            size='small'
            color='error'
            onClick={() => dispatch(removeItem(id))}
            className='fold__button'
            variant='outlined'
            style={{ margin: 0 }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem
