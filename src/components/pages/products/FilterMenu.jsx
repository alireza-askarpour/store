import React from 'react'
import { useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

import Radio from '../../shared/Radio'
import CheckBox from '../../shared/CheckBox'
import RatingsList from '../../shared/RatingsList'
import ToggleSwitch from '../../shared/ToggleSwitch'
import Button from '../../shared/Button'
import { 
    filterBrandAction, 
    filterCategoryAction, 
    filterRatingAction, 
    filterMultiRangeAction, 
    filterStockAction, 
    clearFiltersAction 
} from '../../../redux/actions/filters'

import { brands, categories, multi_range } from '../../../assets/data/products_filter'
import { ratings } from '../../../assets/data/ratings'

const FilterMenu = ({ filter }) => {
    const dispatch = useDispatch()

    const handleFilterRating = (rating) => dispatch(filterRatingAction(rating))

    const handleClearFilters = () => dispatch(clearFiltersAction())
    
    return (
        <div className="filter-menu">
            <div className="multi-range-price">
                <h5 className="title">Multi Range</h5>  
                <div className="options">
                    {
                        multi_range.map((item, index) => (
                            <div key={index} className="custom-control">
                                <Radio 
                                    name="multirange"
                                    id={index} 
                                    label={item.display}
                                    onChange={() => dispatch(filterMultiRangeAction(item.range))}
                                    checked={filter.multiRange === item.range}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h5 className="title">Categories</h5>  
                <div className="options">
                    {
                        categories.map((item, index) => (
                            <div key={index} className="custom-control">
                                <CheckBox 
                                    label={item.display} 
                                    onChange={(input) => dispatch(filterCategoryAction(item, input.checked))}
                                    checked={filter.category.includes(item.category)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h5 className="title">Brands</h5>  
                <div className="options">
                    {
                        brands.map((item, index) => (
                            <div key={index} className="custom-control">
                                <CheckBox 
                                    label={item.display} 
                                    onChange={(input) => dispatch(filterBrandAction(item, input.checked))}
                                    checked={filter.brand.includes(item.brand)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <h5 className="title">Ratings</h5>  
                <div className="options">
                    {
                        ratings.map((item, index) => (
                            <div 
                                key={index} 
                                className="custom-control ratings"
                                onClick={() => handleFilterRating(item.rating)}
                            >
                                <RatingsList rating={item.rating}/>
                                <span>& up</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <h5 className="title">in Stock</h5>  
                <div className="options">
                    <ToggleSwitch
                        id="in-stock"
                        label="Available in stock" 
                        onChange={(input) => dispatch(filterStockAction(input.checked))}
                        checked={filter.stock === true}
                    />
                </div>
            </div>

            <div className="mt">
                <Button roundedFull size="small" click={handleClearFilters}>
                    Cleare Filteres
                </Button>
            </div>
        </div>
    )
}

FilterMenu.propTypes = {
    filter: PropTypes.object.isRequired
}

export default FilterMenu
