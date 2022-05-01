import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Autoplay, Navigation } from 'swiper'
import { Swiper } from 'swiper/react/swiper-react'
import { SwiperSlide } from 'swiper/react/swiper-slide'

import RatingsList from './RatingsList'
import numberWithCommas from '../../utils/numberWithCommas'

import { chevronLeft, chevronRight } from '../../assets/icons'

const ProductSlider = ({ sliderData }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }

  return (
    <div className="product-slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 6000 }}
        breakpoints={breakpoints}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        <div>
          {sliderData &&
            sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={item.link}>
                  <div className="item-heading">
                    <h5 className="title">{item.title}</h5>
                    <small className="brand">by {item.brand}</small>
                  </div>
                  <div className="img-container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-meta">
                    <RatingsList rating={item.rating} />
                    {item.inStock ? (
                      <p className="price">{numberWithCommas(item.price)}</p>
                    ) : (
                      <p className="unavailable">Unavailable</p>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </div>
        <div className="controls-button">
          <button ref={navigationPrevRef} className="prev-button">
            {chevronLeft}
          </button>
          <button ref={navigationNextRef} className="next-button">
            {chevronRight}
          </button>
        </div>
      </Swiper>
    </div>
  )
}

ProductSlider.prototype = {
  sliderData: PropTypes.object,
}

export default ProductSlider
