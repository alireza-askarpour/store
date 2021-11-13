import React from 'react'

import { useSideDrawer } from '../../providers/sideDrawer'
import Logo from '../shared/Logo'
import SidebarMenu from './sidebar/SidebarMenu'

const SideDrawer = ({ click, sidebar }) => {
    const { sideDrawer, hideSideDrawer } = useSideDrawer()

    const sidedrawer = sideDrawer ? 'side-drawer active' : 'side-drawer'

    return (
        <div className={sidedrawer}>
            <div className="menu">
                {
                    sidebar && (
                        <>
                            <div className="menu-logo">
                                <Logo click={hideSideDrawer} />
                            </div>
                            <SidebarMenu/>
                        </>
                    )
                }
            </div>
            <div className="backdrop" onClick={click}></div>
        </div>
    )
}

export default SideDrawer
