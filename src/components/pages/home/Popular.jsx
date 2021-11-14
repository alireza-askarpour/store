import React from 'react'

import Button from '../../shared/Button'

const Popular = ({ revers, main, second, third }) => {
    const layoutRevers = revers ? 'revers' : ''

    return (
        <section className={`popular grid grid-col-1 grid-col-sm-2 grid-col-md-3 ${layoutRevers}`}>
            <section className={`card popular-item main ${main.bgColor}`}>
                <div className="popular-item-image">
                    <img src={main.image} alt={main.title} />
                </div>

                <div className="popular-item-content">
                    <div className="content-caption">
                        <h3 className="caption-title">{main.title}</h3>
                        <p className="caption-description">{main.description}</p>
                    </div>
                    <div className="content-btn">
                        <Button roundedFull bgColor="white" size="large" txtColor={main.btnColor}>
                            {main.btnText}
                        </Button>
                    </div>
                </div>
            </section>

            <section className={`card popular-item second ${second.bgColor}`}>
                <div className="popular-item-image">
                    <img src={second.image} alt={second.title} />
                </div>
                <div className="popular-item-content">
                    <div className="content-badge">
                        <span className="badge">{second.discount}</span>
                    </div>
                    <div className="content-caption">
                        <h5 className="caption-brand">by <span>{second.brand}</span></h5>
                        <h3 className="caption-title">{second.title}</h3>
                        <p className="caption-price">{second.price}</p>
                    </div>
                    <div className="content-btn">
                        <Button roundedFull bgColor="white" txtColor={second.btnColor} size="xs">
                            {second.btnText}
                        </Button>
                    </div>
                </div>
            </section>

            <section className={`card popular-item third ${third.bgColor}`}>
                <div className="popular-item-image">
                    <img src={third.image} alt={third.title} />
                </div>
                <div className="popular-item-content">
                    <div className="content-badge">
                        <span className="badge">{third.discount}</span>
                    </div>
                    <div className="content-caption">
                        <h5 className="caption-brand">by <span>{third.brand}</span></h5>
                        <h3 className="caption-title">{third.title}</h3>
                        <p className="caption-price">{third.price}</p>
                    </div>
                    <div className="content-btn">
                        <Button roundedFull bgColor="white" txtColor={third.btnColor} size="xs">
                            {third.btnText}
                        </Button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Popular
