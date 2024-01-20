import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CartItem from '../cartItem/CartItem'
import Total from '../total/Total'
import { ShoppingBag } from 'lucide-react'
import { useSelector } from 'react-redux'

import './style.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

const Cart = () => {
  // #region Відкриття та закриття модального вікна
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // #endregion

  // #region Отримання даних зі store
  const cart = useSelector((state) => state.cart)

  // сума всіх товарів в корзині
  const getTotalPrice = () => {
    let totalPrice = 0
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity
    })
    return totalPrice
  }
  // #endregion

  // #region Відправка даних на сервер
  const handleBuy = () => {
    // тут буде відправка даних на сервер
    console.log('Buy', cart)
    // закриття модального вікна
    handleClose()
  }
  // #endregion

  return (
    <React.Fragment>
      <Button className='header-bottom__cart' onClick={handleClickOpen}>
        <ShoppingBag className='icon' />
        <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {getTotalPrice() || 0}$
        </span>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            maxHeight: '80%',
          },
        }}
      >
        <DialogTitle
          variant='h5'
          sx={{ m: 0, p: 1 }}
          id='customized-dialog-title'
        >
          Yoki cart
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 3,
          }}
          color='error'
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{ padding: 0 }}>
          <ul className='cart__content cart__modal--grid'>
            {cart.map((item) => (
              <CartItem
                key={item.id} // Унікальний ключ
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </ul>
          <div>
            <Total />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleBuy}
            color='error'
            disabled={cart.length === 0}
          >
            Buy
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}

export default Cart
