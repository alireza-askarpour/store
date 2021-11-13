import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useSideDrawer } from '../../../providers/sideDrawer'

const SidebarItem = ({ name, icon, route, active, menuCollaps }) => {
    const { hideSideDrawer } = useSideDrawer()
    const sidebar = active ? 'sidebar-item active' : 'sidebar-item'

    return (
        <div className={sidebar}>
            <Link to={route} onClick={hideSideDrawer}>
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