import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Logo from '../../Shared/Logo'
import SidebarMenu from './SidebarMenu'

import { useLayout } from 'providers/Layout'
import { classNames } from 'utils/classNames'
import { chevronRight, chevronLeft } from 'assets/icons'

const Sidebar = ({ sideDrawer }) => {
  const sidebarRef = useRef(null)  
  const { menuCollaps, toggleMenuCollaps } = useLayout()
  const handleChangeMenuCollaps = () => toggleMenuCollaps()

  return (
    <div
      ref={sidebarRef}
      className={classNames(
        !menuCollaps ? 'sidebar open-menu' : 'sidebar'
      )}
    >
      <div className="sidebar-logo">
        <Logo hiddenTitle={menuCollaps} />
      </div>

      <SidebarMenu menuCollaps={menuCollaps} />

      {!sideDrawer && (
        <div className="sidebar-toggle">
          <button
            onClick={handleChangeMenuCollaps}
            className={classNames(
              !menuCollaps 
                ? 'sidebar-toggle-btn bg-blue' 
                : 'sidebar-toggle-btn',
            )}
          >
            {menuCollaps ? chevronRight : chevronLeft}
          </button>
        </div>
      )}
    </div>
  )
}

Sidebar.prototype = {
  sideDrawer: PropTypes.bool,
}

export default Sidebar
