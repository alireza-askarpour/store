import React from 'react'

import { useLayout } from '../../providers/layout'

const Header = ({ children }) => {
  const { menuLayout, menuCollaps } = useLayout()

  const menuCollapss =
    menuLayout === 'vertical' && menuCollaps
      ? 'menu-collaps'
      : menuLayout === 'vertical' && !menuCollaps
      ? 'menu-open'
      : ''

  return <header className={`header ${menuCollapss}`}>{children}</header>
}

export default Header
