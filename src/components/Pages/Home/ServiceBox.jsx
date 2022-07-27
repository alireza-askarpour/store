import React from 'react'
import PropTypes from 'prop-types'

const ServiceBox = ({ icon, title, description }) => {
  return (
    <div className="service-box">
      <div className="icon">{icon}</div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

ServiceBox.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ServiceBox
