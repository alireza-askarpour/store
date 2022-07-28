import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { productsAction } from 'redux/actions/products'

import Popular from 'components/Pages/Home/Popular'
import ServiceBox from 'components/Pages/Home/ServiceBox'
import SliderHeading from 'components/Shared/SliderHeading'
import ProductSlider from 'components/Shared/ProductSlider'
import sliderDataFilter from 'helpers/sliderDataFilter'

import { serviceBox } from 'assets/data/service_box'
import { firstPopular, secondPopular } from 'assets/data/popular'

const Home = (props) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productsList)
  const { loading, products } = productList

  useEffect(() => {
    dispatch(productsAction())
  }, [])

  const mobileData = sliderDataFilter(products, 'mobile')
  const smartWatchData = sliderDataFilter(products, 'smart-watch')
  const laptopData = sliderDataFilter(products, 'laptop')
  const computerData = sliderDataFilter(products, 'computer')

  return (
    <div className="home">
      <>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            <div className="mb-25">
              <Popular
                {...props}
                main={firstPopular.main}
                second={firstPopular.second}
                third={firstPopular.third}
              />
            </div>

            <div className="mb-25 grid grid-col-1 grid-col-sm-2 grid-col-md-4">
              {serviceBox.map((item, index) => (
                <ServiceBox
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div className="card mb-25">
              <SliderHeading title="Mobile Phone" />
              <ProductSlider sliderData={mobileData} />
            </div>

            <div className="card mb-25">
              <SliderHeading title="Smart Watch" />
              <ProductSlider sliderData={smartWatchData} />
            </div>

            <div className="mb-25">
              <Popular
                {...props}
                revers
                main={secondPopular.main}
                second={secondPopular.second}
                third={secondPopular.third}
              />
            </div>

            <div className="card mb-25">
              <SliderHeading title="Laptop" />
              <ProductSlider sliderData={laptopData} />
            </div>

            <div className="card mb-25">
              <SliderHeading title="Computer" />
              <ProductSlider sliderData={computerData} />
            </div>
          </>
        )}
      </>
    </div>
  )
}

export default Home
