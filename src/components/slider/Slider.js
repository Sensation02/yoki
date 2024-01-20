/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.scss'

const Slider = () => {
  return (
    <section className='slider'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className='mySwiper'
      >
        <div
          slot='container-start'
          className='parallax-bg'
          style={{
            'background-image':
              '../../assets/pexels-frans-van-heerden-670705.jpg',
            backgroundClip: 'cover',
          }}
          data-swiper-parallax='-23%'
        ></div>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            -10 %
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            FOR SELF TAKEAWAY
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>Hertsena str., 2а</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            Deliver <br />
            the rolls
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            to <strong style={{ fontSize: 200 }}>59</strong>min
          </div>
        </SwiperSlide>
      </Swiper>
      <button className='slider__button'>
        <Link to='/notfound' style={{ textDecoration: 'none', color: 'white' }}>
          Order
        </Link>
      </button>
    </section>
  )
}

export default Slider
