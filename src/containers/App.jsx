import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LayoutProvider } from 'providers/layout'
import MainLayout from 'components/Layout/MainLayout'
import Routes from 'routes/routes'

const App = () => {
  return (
    <Router>
      <LayoutProvider>
        <MainLayout>
          <Routes />
        </MainLayout>
      </LayoutProvider>
    </Router>
  )
}

export default App
