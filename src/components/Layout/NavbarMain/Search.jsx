import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { searchProductsAction } from '../../../redux/actions/products'

import { search, x } from '../../../assets/icons'
import { sidebarMenu } from '../../../assets/data/navbar_menu'

const Search = () => {
  const dispatch = useDispatch()
  const { searchProducts, productsList } = useSelector((state) => state)

  const [searchValue, setSearchValue] = useState('')

  const { pages, products } = searchProducts

  useEffect(() => {
    dispatch(searchProductsAction(searchValue, sidebarMenu, productsList.products))
  }, [productsList, searchValue])

  const searchMenuRef = useRef(null)
  const searchInputRef = useRef(null)
  const searchBtnRef = useRef(null)
  const closeSearchBtnRef = useRef(null)
  const closeXBtnRef = useRef(null)
  const searchRef = useRef(null)

  const toggleSearch = (
    searchBox,
    searchInput,
    searchBtn,
    closeXBtn,
    closeSearchBtn,
    search,
  ) => {
    document.addEventListener('click', (e) => {
      if (searchBtn.current && searchBtn.current.contains(e.target)) {
        searchBox.current.classList.add('active')
        searchInput.current.value = null
        searchInput.current.focus()
      } else {
        if (
          !searchBox.current.contains(e.target) ||
          closeXBtn.current.contains(e.target) ||
          closeSearchBtn.current.contains(e.target)
        ) {
          searchBox.current.classList.remove('active')
          search.current.classList.remove('open-menu')
          setSearchValue('')
        }
      }
    })
  }

  toggleSearch(
    searchMenuRef,
    searchInputRef,
    searchBtnRef,
    closeXBtnRef,
    closeSearchBtnRef,
    searchRef,
  )

  return (
    <div ref={searchRef} className={`search ${searchValue !== '' ? 'open-menu' : ''}`}>
      <button ref={searchBtnRef} className="search-btn">
        {search}
      </button>

      <div ref={searchMenuRef} className="search-box">
        <input
          ref={searchInputRef}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
        />
        <button ref={closeSearchBtnRef} className="search-icon">
          {search}
        </button>
        <button ref={closeXBtnRef} className="x-icon">
          {x}
        </button>
      </div>

      <div className="search-menu">
        <div className="search-menu-container">
          <div className="search-menu-items">
            <h4 className="menu-header">Pages</h4>
            {pages.map((item) => (
              <div key={item.id} className="menu-item">
                <Link to={item.route}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
            {pages.length === 0 && <p className="menu-items-text">No Results Found.</p>}
          </div>

          <div className="search-menu-items">
            <h4 className="menu-header">Products</h4>
            {products.map((item) => (
              <div key={item.id} className="menu-item">
                <Link to={`/product/${item.id}`}>
                  {search}
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
            {products.length === 0 && (
              <p className="menu-items-text">No Results Found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
