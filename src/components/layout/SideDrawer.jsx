import React from 'react'

const SideDrawer = ({ children, show, hideMenu }) => {
  const sideDrawerClass = show ? 'side-drawer active' : 'side-drawer'

  return (
    <div className={sideDrawerClass}>
      <div className="menu">{children}</div>
      <div className="backdrop" onClick={hideMenu}></div>
    </div>
  )
}

export default SideDrawer
