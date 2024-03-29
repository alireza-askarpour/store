import { useNavigate } from 'react-router-dom'
import Button from 'components/Shared/Button'
import Helmet from 'components/Shared/Helmet'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return (
    <Helmet title="Not found">
      <div className="not-found">
        <h1 className="num-404">404</h1>
        <div className="caption">
          <h3 className="title">Page not found</h3>
          <p className="description">
            The page yor are looking for doesn't exist or has been moved.
          </p>
          <Button click={handleClick}>Back to Home</Button>
        </div>
      </div>
    </Helmet>
  )
}

export default NotFound
