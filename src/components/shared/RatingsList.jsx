import React from 'react'
import PropTypes from 'prop-types'

import { star } from '../../assets/icons'

const RatingsList = ({ rating }) => {

    return (
        <ul className={`ratings-list ${rating}`}>
            <li className="ratings-list-item">{star}</li>
            <li className="ratings-list-item">{star}</li>
            <li className="ratings-list-item">{star}</li>
            <li className="ratings-list-item">{star}</li>
            <li className="ratings-list-item">{star}</li>
        </ul>
    )
}

RatingsList.prototype = {
    rating: PropTypes.string
}

export default RatingsList
