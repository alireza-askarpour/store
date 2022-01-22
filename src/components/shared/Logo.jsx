import { Link } from 'react-router-dom'

const Logo = ({ hiddenTitle }) => {
  return (
    <Link to="/">
      <div className="logo">
        <img src="/images/logo.png" className="logo-img" alt="Arcilux" />
        {!hiddenTitle && <span className="logo-title">Arcilux</span>}
      </div>
    </Link>
  )
}

export default Logo
