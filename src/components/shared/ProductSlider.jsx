import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'

import numberWithCommas from '../../utils/numberWithCommas'

import RatingsList from './RatingsList'
const ProductSlider = ({ sliderData }) => {
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
        {
          sliderData.map((item, index) => (
            <SwiperSlide key={index}>
            <Link to={item.link}>
              <div className="item-heading">
                <h5 className="title">{item.title}</h5>
                <small className="brand">by {item.brand}</small>
              </div>
              <div className="img-container">
                <img src={item.image} alt={item.name}/>
              </div>
              <div className="item-meta">
                <RatingsList rating={item.rating}/>
                {
                  item.inStock ? 
                    <p className="price">{numberWithCommas(item.price)}</p>
                  :
                    <p className="unavailable">Unavailable</p>
                }
              </div>
            </Link>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

ProductSlider.prototype = {
  sliderData: PropTypes.object
}

export default ProductSlider
