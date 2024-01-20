import './style.css'
import { useSelector } from 'react-redux'

function Total() {
  // використовуємо useSelector для того, щоб отримати доступ до стейту, це наша корзина
  const cart = useSelector((state) => state.cart)

  // функція getTotal() рахує загальну кількість товарів і загальну ціну
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  const isEmpty = cart.length === 0

  return (
    <div className='total'>
      {isEmpty ? (
        <h2 className='total__title'>Cart is empty</h2>
      ) : (
        <div>
          <h2 className='total__title'>Summary</h2>
          <p className='total__subtitle'>
            Total price: <strong>{getTotal().totalPrice}$</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default Total
