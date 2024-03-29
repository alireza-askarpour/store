import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { productsAction, productDetailsAction } from 'redux/actions/products'
import { addToCartAction } from 'redux/actions/cart'
import { wishlistAction } from 'redux/actions/wishlist'

import BreadcrumbsTop from 'components/Shared/BreadcrumbsTop'
import RatingsList from 'components/Shared/RatingsList'
import QuantityInput from 'components/Shared/QuantityInput'
import SelectBox from 'components/Shared/SelectBox'
import Button from 'components/Shared/Button'
import ProductSlider from 'components/Shared/ProductSlider'
import Helmet from 'components/Shared/Helmet'

import sliderDataFilter from 'helpers/sliderDataFilter'
import numberWithCommas from 'utils/numberWithCommas'
import { classNames } from 'utils/classNames'

import {
  cart,
  dollarSign,
  heart,
  truck,
  share,
  clock,
  shield,
  award,
} from '../assets/icons'
import { socialMedia } from '../assets/data/social_media'
import ImageSlider from '../components/Pages/ProductDetails/ImageSlider'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const { productsList, productDetails, wishlist } = useSelector((state) => state)

  const [color, setColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState(null)

  const { product } = productDetails

  useEffect(() => {
    dispatch(productsAction())
    dispatch(productDetailsAction(params.id))
  }, [params.id])

  useEffect(() => {
    if (product?.colors) setColor(product.colors[0])
    if (product?.images) setImages(product.images)
    if (product?.images) setImage(product.images[0])
  }, [product])

  useEffect(() => {
    const sliderData = sliderDataFilter(productsList.products, product?.category)
    setRelatedProducts(sliderData)
  }, [product])

  const handleUpdateColor = (color) => setColor(color)

  const handleUpdateQuantity = (type) => {
    if (type === 'inc') setQuantity(quantity + 1)
    else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      navigate('/cart')

      dispatch(
        addToCartAction({
          ...product,
          image,
          quantity,
          color,
        }),
      )
    }
  }

  const handleWishlist = () => dispatch(wishlistAction(product))

  const selectedColor = color && color.replace('-', ' ')

  const like = wishlist.wishlist.some((i) => i.id === +product?.id)

  return productsList.loading && productDetails.loading && relatedProducts.length > 0 ? (
    <div>loading...</div>
  ) : (
    <Helmet title="Product details">
      <div className="product-details">
        <div className="content-header">
          <BreadcrumbsTop title="Product Details" />
        </div>

        <div className="card content-main">
          {/* Product Info */}

          <div className="product-info grid grid-col-1 grid-col-md-12">
            <div className="product-info-image">
              {/* <img src={image} alt={name} /> */}
              <ImageSlider sliderData={images} />
            </div>
            <div className="product-info-content">
              <h3 className="product-title">{product?.name}</h3>
              <p className="product-brand">
                by <span>{product?.brand}</span>
              </p>
              <div className="product-price-rating">
                {product?.inStock ? (
                  <h4 className="product-price">
                    {product?.price && numberWithCommas(product?.price)}
                  </h4>
                ) : (
                  <h4 className="product-unavailable">Unavailable</h4>
                )}
                <RatingsList rating={product?.rating} />
              </div>
              <p className="product-available">
                Available
                {product?.inStock ? (
                  <span className="color-green">In stock</span>
                ) : (
                  <span className="color-red">Unavailable</span>
                )}
              </p>
              <div className="product-info-description">{product?.description}</div>
              <div className="product-info-features">
                {product?.freeShopping && (
                  <div className="features-item">
                    {cart}
                    <span>Free Shipping</span>
                  </div>
                )}
                {product?.EMI && (
                  <div className="features-item">
                    {dollarSign}
                    <span>EMI options available</span>
                  </div>
                )}
                {product?.fastDelivery && (
                  <div className="features-item">
                    {truck}
                    <span>Fast Delivery</span>
                  </div>
                )}
              </div>
              <div className="product-colors">
                <h6>
                  Colors
                  <span>{selectedColor}</span>
                </h6>
                <div className="color-options">
                  {product?.colors &&
                    product?.colors.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleUpdateColor(item)}
                        className={classNames('color-option', color === item && 'active')}
                      >
                        <div className={`color bg-${item}`}></div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="product-info-quantity">
                <h6>Quantity</h6>
                <div>
                  <QuantityInput qty={quantity} updateQty={handleUpdateQuantity} />
                </div>
              </div>
              <div className="content-options">
                <div className="content-option">
                  <Button
                    size="small"
                    stock={!product?.inStock}
                    click={handleAddToCart}
                    btnBlock
                  >
                    {cart}
                    {product?.inStock ? 'View in Cart' : 'Unavailable'}
                  </Button>
                </div>
                <div className={classNames('content-option', like && 'like')}>
                  <Button
                    size="small"
                    bgColor="transparent"
                    txtColor="gray"
                    btnBorder="fiveth"
                    btnBlock
                    click={handleWishlist}
                  >
                    {heart} Wishlist
                  </Button>
                </div>
                <div className="content-option">
                  <SelectBox
                    menuData={socialMedia}
                    value={share}
                    onClick={() => {}}
                    size="small"
                    color="gray"
                    selectBlock
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Features */}

          <div className="product-features grid grid-col-1 grid-col-md-3">
            <div className="features-item">
              <div className="item-icon">{award}</div>
              <h4 className="item-title">
                {product?.original ? '100% Original' : '100% Fake'}
              </h4>
              <p className="item-description">
                Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.
              </p>
            </div>

            <div className="features-item">
              <div className="item-icon">{clock}</div>
              <h4 className="item-title">{product?.replacement} Replacement</h4>
              <p className="item-description">
                Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.
              </p>
            </div>

            <div className="features-item">
              <div className="item-icon">{shield}</div>
              <h4 className="item-title">{product?.warranty} Warranty</h4>
              <p className="item-description">
                Cotton candy gingerbread cake I love sugar plum I love sweet croissant.
              </p>
            </div>
          </div>

          {/* Products Related */}

          <div className="products-related">
            <div className="related-heading">
              <h4>Related Products</h4>
              <p>People also search for this items</p>
            </div>
            <ProductSlider sliderData={relatedProducts} />
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default ProductDetails
