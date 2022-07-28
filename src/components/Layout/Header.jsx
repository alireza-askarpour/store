import { useLayout } from 'providers/layout'
import { classNames } from 'utils/classNames'

const Header = ({ children }) => {
  const { menuLayout, menuCollaps } = useLayout()

  return (
    <header
      className={classNames(
        'header',
        menuLayout === 'vertical' && menuCollaps && 'menu-collaps',
        menuLayout === 'vertical' && !menuCollaps && 'menu-open',
      )}
    >
      {children}
    </header>
  )
}

export default Header
