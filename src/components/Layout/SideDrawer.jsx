import { classNames } from '../../utils/classNames'

const SideDrawer = ({ children, show, hideMenu }) => {
  return (
    <div className={classNames(show ? 'side-drawer active' : 'side-drawer')}>
      <div className="menu">{children}</div>
      <div className="backdrop" onClick={hideMenu}></div>
    </div>
  )
}

export default SideDrawer
