import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = ({ title, children }) => {
  document.title = 'Arcilux - ' + title

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>{children}</div>
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Helmet
