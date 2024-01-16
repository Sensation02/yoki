import React from 'react'
import footerImage from '../../assets/footer_logo.svg'
import { Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__item'>
          <div>
            <img src={footerImage} alt='' width={120} height={40} />
          </div>
          <div>
            <a href='https://facebook.com'>Facebook</a>
            <a href='https://twitter.com'>Twitter</a>
            <a href='https://instagram.com'>Instagram</a>
          </div>
        </div>
        <div className='footer__item'>
          <div>contacts</div>
          <div>location</div>
        </div>
        <div className='footer__item'>grid about</div>
      </div>
      <div className='footer__container--copy'>
        <div className='footer__item'>copyright</div>
        <div className='footer__item'>visa</div>
        <div className='footer__item'>made by Vasyl Kaminskyi</div>
      </div>
    </footer>
  )
}

export default Footer
