import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { home, chevronRight } from '../../assets/icons'

const BreadcrumbsTop = ({ title }) => {
    return (
        <div className="breadcrumbs-top">
            <h3 className="breadcrumbs-header">{title}</h3>
            <div className="breadcrumb">
                <Link className="breadcrumb-item" to="/">{home}</Link>
                <div className="chevron-right">{chevronRight}</div>
                <span className="breadcrumb-item"> {title}</span>
            </div>
        </div>
    )
}

BreadcrumbsTop.propTypes = {
    title: PropTypes.string.isRequired
}

export default BreadcrumbsTop
