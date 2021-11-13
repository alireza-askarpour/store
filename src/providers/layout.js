import React, { createContext, useContext, useState, useEffect } from 'react'

const initialValue = {
    menuLayout: '',
    menuCollaps: null,
    productsList: '',
    changeMenuLayout: () => {},
    toggleMenuCollaps: () => {},
    changeProductsList: () => {}
}

const LayoutContext = createContext(initialValue)

export const LayoutProvider = ({ children }) => {

    const [menuLayout, setMenuLayout] = useState('vertical') // for layout site. vertical or horizontal
    const [menuCollaps, setMenuCollaps] = useState(true)     // for sidebar menu
    const [productsList, setProductsList] = useState('grid') // for layout product list in products page

    const changeMenuLayout = (layout) => {
        setMenuLayout(layout)
        localStorage.setItem('menu-layout', layout)
    }
    const toggleMenuCollaps = () => setMenuCollaps(!menuCollaps)
    const changeProductsList = (layout) => setProductsList(layout)

    const value = {
        menuLayout,
        menuCollaps,
        productsList,
        changeMenuLayout,
        toggleMenuCollaps,
        changeProductsList
    }

    useEffect(() => {
        const localMenuLayout = localStorage.getItem('menu-layout')
        localMenuLayout && changeMenuLayout(localMenuLayout)
    }, [])

    return (
        <LayoutContext.Provider 
            value={value}
            children={children} 
        />
    )
}

export const useLayout = () => useContext(LayoutContext)