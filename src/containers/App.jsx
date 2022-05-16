import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LayoutProvider } from '../providers/layout'
import Layout from '../components/layout/Layout'
import Routes from '../routes/routes'

const App = () => {
  return (
    <Router>
      <LayoutProvider>
        <Layout>
          <Routes />
        </Layout>
      </LayoutProvider>
    </Router>
  )
}

export default App
