import { useNavigate } from 'react-router-dom'

import Button from '../components/shared/Button'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return (
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
  )
}

export default NotFound
