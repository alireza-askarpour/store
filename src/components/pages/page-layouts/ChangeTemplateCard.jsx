import { useRef, useEffect } from 'react'

import { classNames } from '../../../utils/classNames'

const ChangeTemplateCard = ({ template, onClick, active, menuLayout }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (active) {
      cardRef.current.classList.add('active')
    } else {
      cardRef.current.classList.remove('active')
    }
  }, [menuLayout])

  return (
    <div
      ref={cardRef}
      className={classNames(
        template === 'sidebar' && 'change-template-card sidebar-card',
        template === 'navbar' && 'change-template-card navbar-card',
      )}
      onClick={onClick}
    >
      <div className="card-image">
        <div className="page">
          {template === 'sidebar' && (
            <>
              <div className="page-sidebar"></div>
              <div className="page-main-navbar"></div>
            </>
          )}
          {template === 'navbar' && (
            <>
              <div className="page-main-navbar"></div>
              <div className="page-menu-navbar"></div>
            </>
          )}
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-body-title">
          {template === 'sidebar' && 'Sidebar'}
          {template === 'navbar' && 'Navbar'}
        </h3>
        <p className="card-body-features">
          {template === 'sidebar' && 'Sidebar + Navbar Main'}
          {template === 'navbar' && 'Navbar Main + Navbar Menu'}
        </p>
      </div>
    </div>
  )
}

export default ChangeTemplateCard
