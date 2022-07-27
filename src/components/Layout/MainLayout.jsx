import React from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'
import Sidebar from './Sidebar'
import NavbarMain from './NavbarMain'
import NavbarMenu from './NavbarMenu'
import Footer from './Footer'

import { useLayout } from '../../providers/layout'
import { classNames } from '../../utils/classNames'

const MainLayout = ({ children }) => {
  const { menuLayout, menuCollaps } = useLayout()

  const cart = useSelector((state) => state.cart)

  const sidebar = menuLayout === 'vertical' && <Sidebar />
  const navbarMenu = menuLayout === 'horizontal' && <NavbarMenu />

  return (
    <div className="layout">
      {sidebar}
      <div
        className={classNames(
          'layout-content',
          menuLayout === 'vertical' && !menuCollaps && 'menu-open',
          menuLayout === 'horizontal' ? 'horizontal-menu' : 'vertical-menu',
        )}
      >
        <Header>
          <NavbarMain cartItems={cart.cartItems} />
          {navbarMenu}
        </Header>
        <div className="layout-content-main">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
