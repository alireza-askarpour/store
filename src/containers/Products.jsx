import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLayout } from '../providers/layout'
import { productsAction } from '../redux/actions/products'
import { sortPriceAction, filterSelectReducer } from '../redux/actions/filters'
import { filterSearchAction } from '../redux/actions/filters'
import { wishlistAction } from '../redux/actions/wishlist'

import BreadcrumbsTop from '../components/shared/BreadcrumbsTop'
import ProductCard from '../components/shared/ProductCard'
import FilterMenu from '../components/pages/products/FilterMenu'
import SelectBox from '../components/shared/SelectBox'
import Tabs from '../components/pages/products/Tabs'
import SideDrawer from '../components/layout/SideDrawer'

import menu from '../assets/icons/menu'
import featherSearch from '../assets/icons/search'
import { productsSort } from '../assets/data/products_sort'
import { chevronRight, chevronLeft } from '../assets/icons'

const Products = () => {
    const dispatch = useDispatch()
    
    const productsList = useSelector(state => state.productsList)
    const filters = useSelector(state => state.filters)
    const { filteredProducts } = useSelector(state => state.filterSelect)
    
    const initProductsShow = filteredProducts.slice(0, 9)
    
    const [showSideDrawer, setShowSideDrawer] = useState(false)
    const [productsShow, setProductsShow] = useState([])
    
    const { loading } = productsList
    const { productsListLayout } = useLayout()

    const handleFilterSearch = (e) => dispatch(filterSearchAction(e.target.value))
    const handleSortPrice = (value) => dispatch(sortPriceAction(value))
    const handleShowSideDrawer = () => setShowSideDrawer(true)
    const handleCloseSideDrawer = () => setShowSideDrawer(false)

    const handleWishlist = (item) => {
        const updateItem = {
            ...item,
            img: item.images[0]
        }
        dispatch(wishlistAction(updateItem))
    }

    useEffect(() => {
        dispatch(productsAction())
    }, [])

    useEffect(() => {
        dispatch(filterSelectReducer())
    }, [productsList, filters])

    useEffect(() => {
        setProductsShow(initProductsShow)
    }, [productsList, filteredProducts])

    const products_list = productsListLayout === 'grid' && filteredProducts.length > 0  
      ? 'products-view grid grid-col-1 grid-col-sm-2 grid-col-lg-3' 
      : 'products-view'   
        
    const [pageIndex, setPageIndex] = useState(0)

    let range = []

    let pages = Math.floor(filteredProducts.length / 9)
    pages = filteredProducts.length % 9 === 0 ? pages : pages + 1
    range = [...Array(pages).keys()]

    const [currPage, setCurrPage] = useState(0)

    const handleSelectPage = page => {
        const start = 9 * page
        const end = start + 9
        
        setPageIndex(page)
        setProductsShow(filteredProducts.slice(start, end))
        setCurrPage(page)
    }
    
    const handlePtrvNext = () => {
        if (pageIndex !== (pages - 1)) {
            const start = 9 * (pageIndex+1)
            const end = start + 9
            
            setProductsShow(filteredProducts.slice(start, end))
            setCurrPage(pageIndex+1)
            setPageIndex(pageIndex+1)
        }
    }

    const handlePtrvPage = () => {
        if (pageIndex !== 0) {
            const start = 9 * (pageIndex-1)
            const end = start + 9
        
            setProductsShow(filteredProducts.slice(start, end))
            setCurrPage(pageIndex-1)
            setPageIndex(pageIndex-1)   
        } 
    }

    return (
        <div className="products">
            {
                loading ? <div>Loading...</div> : (
                    <>
                        <div className="content-header">
                            <BreadcrumbsTop title="Products" link="/products"/>
                        </div>
                        <div className="content-wrapper">
                            <SideDrawer show={showSideDrawer} hideMenu={handleCloseSideDrawer}>
                                <div className="p-1">
                                    <FilterMenu filter={filters}/>
                                </div>
                            </SideDrawer>
                            <div className="content-aside">
                                <div className="filter-menu-wrapper">
                                    <div className="filter-menu-heading">
                                        <h4 className="menu-title">Filters</h4>
                                    </div>
                                    <div className="filter-menu-content card">
                                        <FilterMenu filter={filters}/>
                                    </div>
                                </div>
                            </div>
                            <div className="content-main">
                                <div className="main">
                                    <div className="products-header-items">
                                        <button className="burger-menu" onClick={handleShowSideDrawer}>
                                            {menu}
                                        </button>
                                        <h5 className="result-toggler">{`${filteredProducts.length} results found`}</h5>
                                        <div className="view-options">
                                            <div className="view-option">
                                                <SelectBox
                                                    menuData={productsSort}
                                                    value={filters.sort}
                                                    onClick={handleSortPrice}
                                                />
                                            </div>
                                            <div className="view-option">
                                                <Tabs/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="searchbar">
                                        <input 
                                            type="text" 
                                            className="search-product" 
                                            placeholder="Search Products"
                                            onChange={handleFilterSearch}
                                        />
                                        <div className="search-icon">
                                            {featherSearch}
                                        </div>    
                                    </div>
                                    <div className={products_list}>
                                        {
                                            filteredProducts.length > 0 ? (
                                                productsShow.map((item, index) => (
                                                    <ProductCard
                                                        key={index}
                                                        id={item.id}
                                                        image={item.images[0]}
                                                        price={item.price} 
                                                        name={item.name} 
                                                        description={item.description} 
                                                        rating={item.rating}
                                                        link={`/product/${item.id}`}
                                                        brand={item.brand.replace('-', ' ')}
                                                        inStock={item.inStock}
                                                        addToWishlist={() => handleWishlist(item)}
                                                    />
                                                ))
                                            ) : 
                                            <p className="no-results-found">No results found</p>
                                        }
                                    </div>
                                    {
                                        pages > 1 && (
                                            <div className="pagination-wrapper">
                                                <div className="pagination">
                                                    <button 
                                                        className={`prev-item ${pageIndex === 0 ? 'disable' : ''}`}
                                                        onClick={handlePtrvPage}
                                                    >
                                                        {chevronLeft}
                                                    </button>
                                                    <div className="pagination-items">
                                                        {   
                                                            range.map((item, index) => (
                                                                <button 
                                                                key={index}
                                                                className={`pagination-item ${currPage === index ? 'active' : ''}`}
                                                                onClick={() => handleSelectPage(index)}
                                                                >
                                                                    {item + 1}
                                                                </button>
                                                            ))
                                                        }
                                                    </div>
                                                    <button 
                                                        className={`next-item ${pageIndex === (pages - 1) ? 'disable' : ''}`}
                                                        onClick={handlePtrvNext}
                                                    >
                                                        {chevronRight}
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Products
