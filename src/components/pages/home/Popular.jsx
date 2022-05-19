import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../shared/Button'

import { classNames } from '../../../utils/classNames'
import numberWithCommas from '../../../utils/numberWithCommas'

const Popular = ({ revers, main, second, third }) => {
  const navigate = useNavigate()

  const handleClick = (link) => navigate(link)

  return (
    <section
      className={classNames(
        'popular',
        'grid grid-col-1 grid-col-sm-2 grid-col-md-3',
        revers && 'revers',
      )}
    >
      <section className={classNames('card popular-item main', main.bgColor)}>
        <div className="popular-item-image">
          <img src={main.image} alt={main.title} />
        </div>
        <div className="popular-item-content">
          <div className="content-caption">
            <h3 className="caption-title">{main.title}</h3>
            <p className="caption-description">{main.description}</p>
          </div>
          <div className="content-btn">
            <Button
              roundedFull
              bgColor="white"
              size="large"
              txtColor={main.btnColor}
              click={() => handleClick(main.link)}
            >
              {main.btnText}
            </Button>
          </div>
        </div>
      </section>

      <section className={classNames('card popular-item second', second.bgColor)}>
        <div className="popular-item-image">
          <img src={second.image} alt={second.title} />
        </div>
        <div className="popular-item-content">
          <div className="content-badge">
            <span className="badge">{second.discount}</span>
          </div>
          <div className="content-caption">
            <h5 className="caption-brand">
              by <span>{second.brand}</span>
            </h5>
            <h3 className="caption-title">{second.title}</h3>
            <p className="caption-price">{numberWithCommas(+second.price)}</p>
          </div>
          <div className="content-btn">
            <Button
              roundedFull
              bgColor="white"
              txtColor={second.btnColor}
              size="xs"
              click={() => handleClick(second.link)}
            >
              {second.btnText}
            </Button>
          </div>
        </div>
      </section>

      <section className={classNames('card popular-item third', third.bgColor)}>
        <div className="popular-item-image">
          <img src={third.image} alt={third.title} />
        </div>
        <div className="popular-item-content">
          <div className="content-badge">
            <span className="badge">{third.discount}</span>
          </div>
          <div className="content-caption">
            <h5 className="caption-brand">
              by <span>{third.brand}</span>
            </h5>
            <h3 className="caption-title">{third.title}</h3>
            <p className="caption-price">{numberWithCommas(+third.price)}</p>
          </div>
          <div className="content-btn">
            <Button
              roundedFull
              bgColor="white"
              txtColor={third.btnColor}
              size="xs"
              click={() => handleClick(third.link)}
            >
              {third.btnText}
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Popular
