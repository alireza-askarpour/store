import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SidebarItem = ({ name, icon, route, active, menuCollaps }) => {
    const sidebar = active ? 'sidebar-item active' : 'sidebar-item'

    return (
        <div className={sidebar}>
            <Link to={route}>
                <div className="sidebar-item-inner">
                    <div className="item-icon">
                        {icon}
                    </div>
                    {
                        !menuCollaps && (
                            <span className="item-title">{name}</span>
                        )
                    }
                </div>
            </Link>
        </div>
    )
}

SidebarItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.object,
    route: PropTypes.string,
    active: PropTypes.bool,
    menuCollaps: PropTypes.bool
}

export default SidebarItem