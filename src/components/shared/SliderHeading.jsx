import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SliderHeading = ({ title }) => {
  return (
    <div className="slider-heading">
      <h3 className="title">{title}</h3>
      <Link to="/products">
        <span className="view">View all</span>
      </Link>
    </div>
  )
}

SliderHeading.propTypes = {
  title: PropTypes.string,
}

export default SliderHeading
