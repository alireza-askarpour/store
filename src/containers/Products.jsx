import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLayout } from '../providers/layout'
import { productsAction } from '../redux/actions/products'
import { sortPriceAction } from '../redux/actions/filters'
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
import { heart } from '../assets/icons'

const Products = () => {
    const [filterSelect, setFilterSelect] = useState([])
    const [showSideDrawer, setShowSideDrawer] = useState(false)
    
    const dispatch = useDispatch()

    const productsList = useSelector(state => state.productsList)
    const filters = useSelector(state => state.filters)
    
    const { loading, products } = productsList
    const { productsListLayout } = useLayout()
    const { category, brand, multiRange, rating, search, sort, stock } = filters

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

    const updateProducts = useCallback(
        () => {
            if (!loading) {
                let temp = products
                
                if (category.length > 0) {
                    temp = temp.filter(i => category.includes(i.category))
                }

                if (brand.length > 0) {
                    temp = temp.filter(i => brand.includes(i.brand))
                }

                if (stock) {
                    temp = temp.filter(i => i.inStock)
                }

                if (sort === 'lowest' || sort === 'highest') {
                    temp.sort((a, b) => sort === 'lowest' ? a.price - b.price : (sort === 'highest' && b.price - a.price))
                }

                if (search) {
                    temp = temp.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
                }

                if (rating) {
                    temp = temp.filter(i => i.rating === rating)
                }

                switch (multiRange) {
                    case 'all':  
                        temp = [...temp]
                        break
                    case 'greater-equals-10':
                        temp = temp.filter(i => i.price <= 10)
                        break

                    case 'between-10-and-100':
                        temp = temp.filter(i => i.price >= 10 && i.price <= 100)
                        break
                    case 'between-100-and-500':
                        temp = temp.filter(i => i.price >= 100 && i.price <= 500)
                        break
                    case 'greater-equals-500':
                        temp = temp.filter(i => i.price >= 500)
                        break
                    default:
                        temp = [...temp]
                        break
                }

                setFilterSelect(temp)
            }
        }, [filters, productsList]
    )
        
    useEffect(() => {
        updateProducts()
    }, [updateProducts, productsList, filters])

    const products_list = productsListLayout === 'grid' && filterSelect.length > 0  ? 'products-view grid grid-col-1 grid-col-sm-2 grid-col-lg-3' : 'products-view'   
        
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
                                        <h5 className="result-toggler">{`${filterSelect.length} results found`}</h5>
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
                                            filterSelect.length > 0 ? (
                                                filterSelect.map((item, index) => (
                                                    <ProductCard
                                                        key={index}
                                                        id={item.id}
                                                        image={item.images[0]}
                                                        price={item.price} 
                                                        title={item.name} 
                                                        description={item.description} 
                                                        rating={item.rating}
                                                        link={`/product/${item.id}`}
                                                        brand={item.brand.replace('-', ' ')}
                                                        inStock={item.inStock}
                                                        leftBtnClick={() => handleWishlist(item)}
                                                        rightBtnLink={`/product/${item.id}`}
                                                        leftBtnText={<>{heart} Wishlist</>}
                                                    />
                                                ))
                                            ) : 
                                            <p className="no-results-found">No results found</p>
                                        }
                                    </div>
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
