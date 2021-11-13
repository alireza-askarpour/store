import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LayoutProvider } from '../providers/layout'
import { SideDrawerProvider } from '../providers/sideDrawer'
import Layout from '../components/layout/Layout'
import Routes from '../routes/routes'

const App = () => {
  return (
    <Router>
      <LayoutProvider>
        <SideDrawerProvider>
        <Layout>
          <Routes/>
        </Layout>
        </SideDrawerProvider>
      </LayoutProvider>
    </Router>
  )
}

export default App
