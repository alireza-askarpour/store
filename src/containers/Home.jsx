import React from 'react'

import Popular from '../components/pages/home/Popular'
import ServiceBox from '../components/pages/home/ServiceBox'
import SliderHeading from '../components/shared/SliderHeading'
import ProductSlider from '../components/shared/ProductSlider'


import { serviceBox } from '../assets/data/service_box'
import { firstPopular, secondPopular } from '../assets/data/popular'

const Home = () => {
    return (
        <div className="home">
            <div className="mb-25">
                <Popular
                    main={firstPopular.main}
                    second={firstPopular.second}
                    third={firstPopular.third}
                />
            </div>

            <div className="mb-25 grid grid-col-1 grid-col-sm-2 grid-col-md-4">
                {
                    serviceBox.map((item, index) => (
                        <ServiceBox 
                            key={index} 
                            icon={item.icon}
                            title={item.title} 
                            description={item.description} 
                        />
                    ))
                }
            </div>

            <div className="card mb-25">
                <SliderHeading title="Mobile Phone"/>
                <ProductSlider/>
            </div>

            <div className="card mb-25">
                <SliderHeading title="Smart Watch"/>
                <ProductSlider/>
            </div>

            <div className="mb-25">
                <Popular
                    revers
                    main={secondPopular.main}
                    second={secondPopular.second}
                    third={secondPopular.third}
                />
            </div>


            <div className="card mb-25">
                <SliderHeading title="Laptop"/>
                <ProductSlider/>
            </div>

            <div className="card mb-25">
                <SliderHeading title="Computer"/>
                <ProductSlider/>
            </div>
        </div>
    )
}

export default Home
