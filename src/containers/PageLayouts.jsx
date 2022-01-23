import React from 'react'
import ChangeTemplateCard from '../components/pages/page-layouts/ChangeTemplateCard'

import { useLayout } from '../providers/layout'

const PageLayouts = () => {
  const { menuLayout, changeMenuLayout } = useLayout()

  const handleHorizontalLayout = () => changeMenuLayout('horizontal')
  const handleVertivalLayout = () => changeMenuLayout('vertical')

  const activeCard = menuLayout === 'vertical'

  return (
    <div className="page-layouts">
      <ChangeTemplateCard
        template="sidebar"
        onClick={handleVertivalLayout}
        menuLayout={menuLayout}
        active={activeCard}
      />
      <ChangeTemplateCard
        template="navbar"
        onClick={handleHorizontalLayout}
        menuLayout={menuLayout}
        active={!activeCard}
      />
    </div>
  )
}

export default PageLayouts
