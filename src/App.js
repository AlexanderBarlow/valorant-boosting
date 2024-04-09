import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import Header from './components/navbar.js'
import LandingPage from './pages/LandingPage.js'
import ValorantPage from './pages/ValorantPage.js'
import LeagePage from './pages/LeagePage.js'
import DefaultLayout from './layout/DefaultLayout'
import Login from './views/pages/login/Login'
import Register from './views/pages/register/Register'
import Page404 from './views/pages/page404/Page404'
import Page500 from './views/pages/page500/Page500'
import './scss/style.scss'

function App() {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    // Your theme setting logic here
  }, [])

  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/valorant" element={<ValorantPage />} />
          <Route path="/league" element={<LeagePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/404" element={<Page404 />} />
          <Route exact path="/500" element={<Page500 />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
