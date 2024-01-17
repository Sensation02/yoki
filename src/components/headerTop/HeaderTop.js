import { Search, Heart, UserRound, Smartphone } from 'lucide-react'
import './style.scss'

import React from 'react'

const HeaderTop = () => {
  return (
    <div className='header__top'>
      <div className='header__location'>
        <p>
          Доставка азійської кухні у
          <a href='/location' className='link--reverse'>
            Чернівцях
          </a>
        </p>
        <p>
          Доставка: Кур'єром
          <a href='/delivery/type' className='link--reverse'>
            Змінити
          </a>
        </p>
      </div>
      <a href='/delivery/payment' className='link'>
        Доставка та оплата
      </a>
      <div className='header__contacts'>
        <div className='header__contacts__phone'>
          <Smartphone size={20} color='white' />
          <a href='tel:+380501234567' className='link'>
            050 123 45 67
          </a>
        </div>
        <div className='header__contacts__time'>
          <span className='header__contacts__time--heading'>Доставляємо</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className='header__contacts__self'>Самовиніс до 22:45</div>
      </div>
      <div className='header__actions'>
        <a href='/search' className='icon'>
          <Search size={20} />
        </a>
        <a href='/favorite' className='icon'>
          <Heart size={20} />
        </a>
        <a href='/profile' className='icon'>
          <UserRound size={20} />
        </a>
      </div>
    </div>
  )
}

export default HeaderTop
