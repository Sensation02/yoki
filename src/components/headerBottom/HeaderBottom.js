import React, { useState, useEffect } from 'react'
import LongMenu from '../ui/Menu'
import logo from '../../assets/logo_black_resteurant-01.svg'
import { ShoppingBag, Search, Heart, UserRound } from 'lucide-react'
import Routes from '../ui/Routes'
import './style.scss'

const HeaderBottom = ({ className }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`header-bottom ${className}`}>
      <div className='header-bottom__menu'>
        <img src={logo} alt='yoki_logo' className='logo' />
        {windowWidth <= 619 && <LongMenu className='icon' />}
      </div>

      {windowWidth > 620 && <Routes />}
      {windowWidth < 1200 && (
        <div className='header-bottom__item'>
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
          <button className='header-bottom__cart' type='button'>
            <ShoppingBag className='icon' />
            <span>0 $</span>
          </button>
        </div>
      )}
      {windowWidth > 1200 && (
        <button className='header-bottom__cart' type='button'>
          <ShoppingBag className='icon' />
          <span>0 $</span>
        </button>
      )}
    </div>
  )
}

export default HeaderBottom
