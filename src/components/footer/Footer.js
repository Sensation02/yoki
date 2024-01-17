import React from 'react'
import footerImage from '../../assets/footer_logo.svg'
import {
  Instagram,
  Facebook,
  Smartphone,
  MapPin,
  ChevronUp,
} from 'lucide-react'
import visa from '../../assets/visa.svg'
import mastercard from '../../assets/mastercard.svg'
import './style.scss'

const about = [
  {
    title: 'About us',
    link: '/about',
  },
  {
    title: 'Delivery and payment',
    link: '/delivery',
  },
  {
    title: 'Contacts',
    link: '/contacts',
  },
  {
    title: 'Vacancies',
    link: '/vacancies',
  },
  {
    title: 'Feedback',
    link: '/feedback',
  },
  {
    title: 'Sale',
    link: '/sale',
  },
  {
    title: 'Sets',
    link: '/sets',
  },
  {
    title: 'Pizza',
    link: '/pizza',
  },
]

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className='footer '>
      <div className='footer__container'>
        <div className='footer__item'>
          <div>
            <img src={footerImage} alt='' width={120} height={40} />
          </div>
          <div className='item__socials'>
            <a
              href='https://facebook.com'
              className='red-icon'
              target='_blank'
              rel='noreferrer'
            >
              <Facebook size={24} className='icon' />
            </a>
            <a
              href='https://instagram.com'
              className='red-icon'
              target='_blank'
              rel='noreferrer'
            >
              <Instagram size={24} className='icon' />
            </a>
          </div>
        </div>
        <div className='footer__item'>
          <div className='info-item'>
            <div className='info-icon__container'>
              <Smartphone size={24} className='icon' />
            </div>
            <div className='info-item__description'>
              <a href='tel:+380501234567' className='link'>
                050 123 45 67
              </a>
              <span>Working time</span>
              <p>
                11:00-23:00 <span>Deliver to 22:00</span>
              </p>
            </div>
          </div>
          <div className='info-item'>
            <div className='info-icon__container'>
              <MapPin size={24} className='icon' />
            </div>
            <div className='info-item__description location'>
              Address
              <span>Chernivtsi, Universytetska str., 15</span>
            </div>
          </div>
        </div>
        <div className='footer__item'>
          <div className='about'>
            {about.map((item, index) => (
              <a href={item.link} className='link' key={index}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className='red-icon' onClick={handleScrollToTop}>
          <ChevronUp size={24} />
        </div>
      </div>
      <div className='footer__container--copy'>
        <div className='footer__item' style={{ flexDirection: 'row' }}>
          &copy; Пампух fake store
        </div>
        <div className='footer__item'>
          <div className='paycards'>
            <img src={mastercard} alt='' />
            <img src={visa} alt='' />
          </div>
        </div>
        <div className='footer__item' style={{ flexDirection: 'row' }}>
          made by
          <strong style={{ fontWeight: 'bold' }}>Vasyl Kaminskyi</strong>
        </div>
      </div>
    </footer>
  )
}

export default Footer
