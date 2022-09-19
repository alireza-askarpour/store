import { useDispatch, useSelector } from 'react-redux'
import { wishlistAction } from 'redux/actions/wishlist'
import BreadcrumbsTop from 'components/Shared/BreadcrumbsTop'
import WishlistCard from 'components/Pages/Wishlist/WishlistCard'
import Helmet from 'components/Shared/Helmet'

const Wishlist = () => {
  const dispatch = useDispatch()

  const { wishlist } = useSelector((state) => state.wishlist)

  const handleWishlist = (item) => dispatch(wishlistAction(item))

  return (
    <Helmet title="Wishlist">
      <div className="wishlist">
        <div className="content-header">
          <BreadcrumbsTop title="Wishlist" />
        </div>
        <div className="content-main">
          <div className="wishlist-items grid grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
            {wishlist.map((item, index) => (
              <WishlistCard
                key={index}
                item={item}
                leftBtnClick={() => handleWishlist(item)}
              />
            ))}
          </div>
          {wishlist.length === 0 && <p className="empty-text">Your wishlist is empty</p>}
        </div>
      </div>
    </Helmet>
  )
}

export default Wishlist
