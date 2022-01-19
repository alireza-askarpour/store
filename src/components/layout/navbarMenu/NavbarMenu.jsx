import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { sidebarMenu } from '../../../assets/data/navbar_menu'

const NavbarMenu = () => {
  const { pathname } = useLocation()

  const activeItem = sidebarMenu.findIndex((item) => item.route === pathname)

  return (
    <div className="navbar-menu-wrapper">
      <div className="navbar-menu">
        <ul className="navbar-menu-items">
          {sidebarMenu.map((item, index) => (
            <li
              className={`nav-item ${index === activeItem ? 'active' : ''}`}
              key={index}
            >
              <Link to={item.route}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavbarMenu
