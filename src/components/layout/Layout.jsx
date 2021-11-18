import React from 'react'

import { useLayout } from '../../providers/layout'
import Header from '../../components/layout/Header'
import Sidebar from './sidebar/Sidebar'
import NavbarMain from './navbarMain/NavbarMain'
import NavbarMenu from './navbarMenu/NavbarMenu'
import Footer from '../layout/Footer'

const Layout = ({ children }) => {
    const { menuLayout, menuCollaps } = useLayout()
    
    const sidebar = menuLayout === 'vertical' && <Sidebar/>
    const navbarMenu = menuLayout === 'horizontal' && <NavbarMenu />
    const menuOpen = !menuCollaps ? 'menu-open' : ''
    const layoutMenu = menuLayout === 'horizontal' ? 'horizontal-menu' : 'vertical-menu'
    
    return (
        <div className="layout">
            {sidebar}
            <div className={`layout-content ${menuOpen} ${layoutMenu}`}>
                <Header>
                    <NavbarMain/>
                    {navbarMenu}
                </Header>
                <div className="layout-content-main">
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
