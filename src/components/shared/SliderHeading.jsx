import React from 'react'
import PropTypes from 'prop-types'

const SliderHeading = ({ title }) => {
    return (
        <div className="slider-heading">
            <h3 className="title">{title}</h3>
            <span className="view">View all</span>
        </div>
    )
}

SliderHeading.propTypes = {
    title: PropTypes.string
}

export default SliderHeading
