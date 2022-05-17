import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../components/layout/Header'
import Sidebar from './sidebar/Sidebar'
import NavbarMain from './navbarMain/NavbarMain'
import NavbarMenu from './navbarMenu/NavbarMenu'
import Footer from '../layout/Footer'

import { useLayout } from '../../providers/layout'
import { classNames } from '../../utils/classNames'

const Layout = ({ children }) => {
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
          !menuCollaps && 'menu-open',
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

export default Layout
