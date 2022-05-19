import { useState } from 'react'

import { classNames } from '../../../utils/classNames'
import { chevronRight, chevronLeft } from '../../../assets/icons'

const ImageSlider = ({ sliderData }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const handleNextSlide = () => {
    if (slideIndex !== sliderData.length) setSlideIndex(slideIndex + 1)
    else if (slideIndex === sliderData.length) setSlideIndex(1)
  }

  const handlePrevSlide = () => {
    if (slideIndex !== 1) setSlideIndex(slideIndex - 1)
    else if (slideIndex === 1) setSlideIndex(sliderData.length)
  }

  const handleMoveDot = (index) => setSlideIndex(index)

  return (
    <div className="image-slider">
      {sliderData &&
        sliderData.map((item, index) => (
          <div
            key={index}
            className={classNames('slide', index + 1 === slideIndex && 'active')}
          >
            <div className="slide-image">
              <img src={item} alt={item} />
            </div>
          </div>
        ))}

      <button onClick={handlePrevSlide} className="btn-slide-prev">
        {chevronLeft}
      </button>
      <button onClick={handleNextSlide} className="btn-slide-next">
        {chevronRight}
      </button>

      <div className="slide-dots">
        {sliderData &&
          sliderData.map((item, index) => (
            <div
              className={classNames('slide-dot', index + 1 === slideIndex && 'active')}
              onClick={() => handleMoveDot(index + 1)}
            >
              <img src={item} alt={item} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ImageSlider
