import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useLayout } from '../../../providers/layout'
import { removeFromCartAction, updateCartItemAction } from '../../../redux/actions/cart'

import Logo from '../../shared/Logo'
import Search from './Search'
import Dropdown from '../../shared/Dropdown'
import DropdownUserToggle from './DropdownUserToggle'
import DropdownMenuHeader from './DropdownMenuHeader'
import DropdownMenuItem from './DropdownMenuItem'
import DropdownMenuEmpty from './DropdownMenuEmpty'
import DropdownMenuFooter from './DropdownMenuFooter'
import DropdownUserMenuItem from './DropdownUserMenuItem'
import SideDrawer from '../SideDrawer'
import SidebarMenu from '../sidebar/SidebarMenu'

import numberWithCommas from '../../../utils/numberWithCommas'

import {
  bell,
  cart,
  star,
  mail,
  menu,
  moon,
  messageSquare,
  checkSquare,
} from '../../../assets/icons'
import { userMenuItem } from '../../../assets/data/user'
import { notificationItems } from '../../../assets/data/notifications'

const NavbarMain = ({ cartItems }) => {
  const dispatch = useDispatch()
  const { menuLayout } = useLayout()

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const handleShowSideDrawer = () => setShowSideDrawer(true)
  const handleCloseSideDrawer = () => setShowSideDrawer(false)
  const handleRemoveFromCart = (id, color, category) =>
    dispatch(removeFromCartAction(id, color, category))

  const handleUpdateQuantity = (type, item) => {
    if (type === 'inc') {
      dispatch(updateCartItemAction({ ...item, quantity: item.quantity + 1 }))
    } else {
      const qtyLimit = item.quantity - 1 === 0 ? 1 : item.quantity - 1
      dispatch(updateCartItemAction({ ...item, quantity: qtyLimit }))
    }
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0)

  const totalCartProducts = cartItems.reduce((total, item) => total + item.quantity, 0)

  const logo = menuLayout === 'horizontal' && (
    <div className="logo-wrapper">
      <Logo />
    </div>
  )

  const renderUserMenuItem = (item) => (
    <DropdownUserMenuItem icon={item.icon} content={item.content} route={item.route} />
  )

  const renderNotificationHeader = (
    <DropdownMenuHeader heading="Notification" badge="6 New" />
  )

  const renderNotificationItem = (item) => (
    <DropdownMenuItem
      notificationItem={true}
      icon={item.icon}
      title={item.title}
      text={item.text}
      color={item.color}
    />
  )

  const renderNotificationFooter = <DropdownMenuFooter title="Read all notifications" />

  const renderCartHeader = (
    <DropdownMenuHeader heading="My Cart" badge={`${totalCartProducts} Items`} />
  )

  const renderCartItem = (item) => (
    <DropdownMenuItem
      cartItem
      image={item.image}
      price={numberWithCommas(item.totalPrice)}
      brand={item.brand}
      title={item.name}
      item={item}
      removeFromCart={handleRemoveFromCart}
      updateQuantity={handleUpdateQuantity}
    />
  )

  const renderCartEmpty = <DropdownMenuEmpty text="Your cart is empty" />

  const renderCartFooter = (
    <DropdownMenuFooter
      title="Checkout"
      total={numberWithCommas(totalPrice)}
      link="/cart"
    />
  )

  const horizontalMenu = menuLayout === 'horizontal' ? 'horizontal-menu' : ''

  return (
    <nav className={`navbar-main-wrapper ${horizontalMenu}`}>
      <section className="navbar-main">
        <SideDrawer show={showSideDrawer} hideMenu={handleCloseSideDrawer}>
          <div className="menu-logo">
            <Logo />
          </div>
          <SidebarMenu />
        </SideDrawer>
        <div className="menu-left">
          <button className="burger-menu" onClick={handleShowSideDrawer}>
            {menu}
          </button>
          <div className="bookmarks">
            <div className="bookmark-item">{messageSquare}</div>
            <div className="bookmark-item">{mail}</div>
            <div className="bookmark-item">{checkSquare}</div>
            <div className="bookmark-item">{star}</div>
          </div>
        </div>
        {logo}
        <div className="menu-righ">
          <Search />
          <Dropdown
            icon={cart}
            badge={totalCartProducts.toString()}
            color="bg-blue"
            menuData={cartItems}
            renderHeader={renderCartHeader}
            renderItems={renderCartItem}
            renderEmpty={renderCartEmpty}
            renderFooter={renderCartFooter}
          />

          <Dropdown
            icon={bell}
            badge="6"
            color="bg-red"
            menuData={notificationItems}
            renderHeader={renderNotificationHeader}
            renderItems={renderNotificationItem}
            renderFooter={renderNotificationFooter}
          />

          <Dropdown
            customToggle={<DropdownUserToggle />}
            menuData={userMenuItem}
            renderItems={renderUserMenuItem}
            size="small"
          />
        </div>
      </section>
    </nav>
  )
}

export default NavbarMain
