import React, { createContext, useContext, useState } from 'react'

const initialValue = {
    sideDrawer: false,
    showSideDrawer: () => {},
    hideSideDrawer: () => {},
}

const SideDrawerContext = createContext(initialValue)

export const SideDrawerProvider = ({ children }) => {

    const [sideDrawer, setSideDrawer] = useState(false)

    const showSideDrawer = () => setSideDrawer(true)
    const hideSideDrawer = () => setSideDrawer(false)

    const value = { sideDrawer, showSideDrawer, hideSideDrawer }

    return (
        <SideDrawerContext.Provider
            value={value}
            children={children}
        />
    )
}

export const useSideDrawer = () => useContext(SideDrawerContext)