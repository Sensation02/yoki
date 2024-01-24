import { Search, Heart, UserRound, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import './style.scss'

import React from 'react'

const HeaderTop = () => {
  return (
    <div className='header__top'>
      <div className='header__location'>
        <p>
          Asian cuisine delivery in
          <Link to='/notfound' className='link--reverse'>
            Chernivtsi
          </Link>
        </p>
        <p>
          Delivery: Courier
          <Link to='/notfound' className='link--reverse'>
            Switch
          </Link>
        </p>
      </div>
      <Link to='/notfound' className='link'>
        Delivery and payment
      </Link>
      <div className='header__contacts'>
        <div className='header__contacts__phone'>
          <Smartphone size={20} color='white' />
          <Link href='tel:+380501234567' className='link'>
            050 123 45 67
          </Link>
        </div>
        <div className='header__contacts__time'>
          <span className='header__contacts__time--heading'>Deliver to</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className='header__contacts__self'>Self-delivery 22:45</div>
      </div>
      <div className='header__actions'>
        <Link to='/search' className='icon'>
          <Search size={20} />
        </Link>
        <Link to='/favorite' className='icon'>
          <Heart size={20} />
        </Link>
        <Link to='/profile/:profileId' className='icon'>
          <UserRound size={20} />
        </Link>
      </div>
    </div>
  )
}

export default HeaderTop
