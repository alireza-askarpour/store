import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { search, x, cart, grid, heart, home } from '../../../assets/icons'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    
    const searchMenuRef = useRef(null)
    const searchInputRef = useRef(null)
    const searchBtnRef = useRef(null)
    const closeSearchBtnRef = useRef(null)
    const closeXBtnRef = useRef(null)
    const searchRef = useRef(null)

    const toggleSearch = (searchBox, searchInput, searchBtn, closeXBtn, closeSearchBtn, search) => {
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

    toggleSearch(searchMenuRef, searchInputRef, searchBtnRef, closeXBtnRef, closeSearchBtnRef, searchRef)

    return (
        <div ref={searchRef} className={`search ${searchValue !== '' ? 'open-menu' : ''}`}>
            <button ref={searchBtnRef} className="search-btn">{search}</button>

            <div ref={searchMenuRef} className="search-box">
                <input ref={searchInputRef} type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
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
                        {/* <p className="menu-items-text">No Results Found.</p> */}
                        <div className="menu-item">
                            <Link to="/">
                                {home}
                                <span>
                                    Home
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {grid}
                                <span>
                                    Category
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {cart}
                                <span>
                                    Cart
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {heart}
                                <span>
                                    Wishlist
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="search-menu-items">
                        <h4 className="menu-header">Category</h4>
                        {/* <p className="menu-items-text">No Results Found.</p> */}
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Laptop
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Mobile
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Headphone
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Computer
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="search-menu-items">
                        <h4 className="menu-header">Brands</h4>
                        {/* <p className="menu-items-text">No Results Found.</p> */}
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Apple
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Samsung
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    HP
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Beats
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="search-menu-items">
                        <h4 className="menu-header">Products</h4>
                        {/* <p className="menu-items-text">No Results Found.</p> */}
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    MacBook Air - 13.3"
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Galaxy Buds Pro
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    HP Spectre x360
                                </span>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                                {search}
                                <span>
                                    Beats Headphones Solo Pro
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
