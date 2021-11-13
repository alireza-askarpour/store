import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useLayout } from '../../../providers/layout'
import Logo from '../../shared/Logo'
import SidebarMenu from './SidebarMenu'

import { chevronRight, chevronLeft } from '../../../assets/icons'

const Sidebar = ({ sideDrawer }) => {
    const { menuCollaps, toggleMenuCollaps } = useLayout()
    const sidebarRef = useRef(null)

    const handleChangeMenuCollaps = () => toggleMenuCollaps()

    const sidebar = !menuCollaps ? 'sidebar open-menu' : 'sidebar'
    const sidebarToggleBtn = !menuCollaps ? 'sidebar-toggle-btn bg-blue' : 'sidebar-toggle-btn'

    return (
        <div ref={sidebarRef} className={sidebar}>
            <div className="sidebar-logo">
                <Logo hiddenTitle={menuCollaps} />
            </div>
            <SidebarMenu menuCollaps={menuCollaps} />
            {
                !sideDrawer && (
                    <div className="sidebar-toggle">
                        <button 
                            onClick={handleChangeMenuCollaps}
                            className={sidebarToggleBtn}
                        >
                            {
                                menuCollaps ? chevronRight : chevronLeft
                            }
                        </button>
                    </div>
                )
            }
        </div>
    )
}

Sidebar.prototype = {
    sideDrawer: PropTypes.bool,
}

export default Sidebar
