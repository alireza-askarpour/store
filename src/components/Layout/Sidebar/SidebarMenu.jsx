import { useLocation } from 'react-router-dom'
import SidebarItem from './SidebarItem'
import { moreHorizontal } from 'assets/icons'
import { sidebarPages, sidebarUserInterface } from 'assets/data/sidebar'

const SidebarMenu = ({ menuCollaps }) => {
  const { pathname } = useLocation()

  const activeItemPage = sidebarPages.findIndex((item) => item.route === pathname)
  const activeItemUI = sidebarUserInterface.findIndex((item) => item.route === pathname)

  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-items">
        <div className="sidebar-menu-items-heading">
          {menuCollaps ? moreHorizontal : <span>Pages</span>}
        </div>
        {sidebarPages.map((item, index) => (
          <SidebarItem
            key={index}
            name={item.name}
            icon={item.icon}
            route={item.route}
            active={index === activeItemPage}
            menuCollaps={menuCollaps}
          />
        ))}
      </div>

      <div className="sidebar-menu-items">
        <div className="sidebar-menu-items-heading">
          {menuCollaps ? moreHorizontal : <span>User Interface</span>}
        </div>
        {sidebarUserInterface.map((item, index) => (
          <SidebarItem
            key={index}
            name={item.name}
            icon={item.icon}
            route={item.route}
            active={index === activeItemUI}
            menuCollaps={menuCollaps}
          />
        ))}
      </div>
    </div>
  )
}

export default SidebarMenu
