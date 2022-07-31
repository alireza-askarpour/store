import React from 'react'
import { useLayout } from '../providers/Layout'
import BreadcrumbsTop from '../components/Shared/BreadcrumbsTop'
import ChangeTemplateCard from '../components/Pages/PageLayouts/ChangeTemplateCard'

const PageLayouts = () => {
  const { menuLayout, changeMenuLayout } = useLayout()

  const handleHorizontalLayout = () => changeMenuLayout('horizontal')
  const handleVertivalLayout = () => changeMenuLayout('vertical')

  const activeCard = menuLayout === 'vertical'

  return (
    <div className="page-layouts">
      <BreadcrumbsTop title="Page Layouts" />
      <div className="card-wrapper">
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
    </div>
  )
}

export default PageLayouts
