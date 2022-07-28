import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Radio from '../../Shared/Radio'
import Button from '../../Shared/Button'
import CheckBox from '../../Shared/CheckBox'
import RatingsList from '../../Shared/RatingsList'
import ToggleSwitch from '../../Shared/ToggleSwitch'
import {
  filterBrandAction,
  filterCategoryAction,
  filterRatingAction,
  filterMultiRangeAction,
  filterStockAction,
  clearFiltersAction,
} from 'redux/actions/filters'

import { check } from 'assets/icons'
import { ratings } from 'assets/data/ratings'
import { brands, categories, multi_range } from 'assets/data/products_filter'

const FilterMenu = ({ filter }) => {
  const dispatch = useDispatch()

  const { multiRange } = useSelector((state) => state.filters)

  const handleFilterRating = (rating) => dispatch(filterRatingAction(rating))
  const handleClearFilters = () => dispatch(clearFiltersAction())

  return (
    <div className="filter-menu">
      <div className="multi-range-price">
        <h5 className="title">Multi Range</h5>
        <div className="options">
          {multi_range.map((item, index) => (
            <div key={index} className="custom-control">
              <Radio
                value={item.range}
                label={item.display}
                onChange={(value) => dispatch(filterMultiRangeAction(value))}
                selected={multiRange}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="title">Categories</h5>
        <div className="options">
          {categories.map((item, index) => (
            <div key={index} className="custom-control">
              <CheckBox
                label={item.display}
                onChange={(input) => dispatch(filterCategoryAction(item, input.checked))}
                checked={filter.category.includes(item.category)}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="title">Brands</h5>
        <div className="options">
          {brands.map((item, index) => (
            <div key={index} className="custom-control">
              <CheckBox
                label={item.display}
                onChange={(input) => dispatch(filterBrandAction(item, input.checked))}
                checked={filter.brand.includes(item.brand)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="ratings">
        <h5 className="title">Ratings</h5>
        <div className="options">
          {ratings.map((item, index) => (
            <div
              key={index}
              className="custom-control ratings"
              onClick={() => handleFilterRating(item.rating)}
            >
              <RatingsList rating={item.rating} />

              {filter.rating === index + 1 && <span className="cheked">{check}</span>}
            </div>
          ))}
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
  filter: PropTypes.object.isRequired,
}

export default FilterMenu
