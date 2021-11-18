import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import RatingsList from './RatingsList'

const ProductSlider = () => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }

  return (
    <div className="product-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
            <div className="item-heading">
              <h5 className="title">Apple Watch Series 6</h5>
              <small className="brand">by Apple</small>
            </div>
            <div className="img-container">
              <img src="images/apple-watch-series-6-3.png" alt="" />
            </div>
            <div className="item-meta">
              <RatingsList rating={5} />
              <p className="price">$399.98</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSlider
