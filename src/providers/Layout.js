import React, { createContext, useContext, useState, useEffect } from 'react'

const initialValue = {
  menuLayout: '',
  menuCollaps: null,
  productsListLayout: '',
  changeMenuLayout: () => {},
  toggleMenuCollaps: () => {},
  changeProductsListLayout: () => {},
}

const LayoutContext = createContext(initialValue)

export const LayoutProvider = ({ children }) => {
  const [menuLayout, setMenuLayout] = useState('vertical') // for layout site. vertical or horizontal
  const [menuCollaps, setMenuCollaps] = useState(true) // for sidebar menu
  const [productsListLayout, setProductsListLayout] = useState('grid') // for layout product list in products page

  const changeMenuLayout = (layout) => {
    setMenuLayout(layout)
    localStorage.setItem('menu-layout', layout)
  }
  const toggleMenuCollaps = () => setMenuCollaps(!menuCollaps)
  const changeProductsListLayout = (layout) => setProductsListLayout(layout)

  const value = {
    menuLayout,
    menuCollaps,
    productsListLayout,
    changeMenuLayout,
    toggleMenuCollaps,
    changeProductsListLayout,
  }

  useEffect(() => {
    const localMenuLayout = localStorage.getItem('menu-layout')
    localMenuLayout && changeMenuLayout(localMenuLayout)
  }, [])

  return <LayoutContext.Provider value={value} children={children} />
}

export const useLayout = () => useContext(LayoutContext)
