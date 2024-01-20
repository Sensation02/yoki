import React from 'react'
import { Plus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

const AddButton = ({ id, name, image, price }) => {
  const dispatch = useDispatch()

  return (
    <button
      className='red-icon float-right'
      onClick={() =>
        dispatch(
          addToCart({
            id,
            name,
            image,
            price,
          }),
        )
      }
    >
      <Plus size={24} className='icon' />
    </button>
  )
}

export default AddButton
