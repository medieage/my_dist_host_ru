import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import HomePage from './pages/HomePage'
    import ServicesPage from './pages/ServicesPage'
    import PricingPage from './pages/PricingPage'
    import ContactPage from './pages/ContactPage'
    import LoginPage from './pages/LoginPage'
    import RegisterPage from './pages/RegisterPage'
    import DashboardPage from './pages/DashboardPage'
    import Navigation from './components/Navigation'
    import Footer from './components/Footer'

    function App() {
      return (
        <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <Footer />
        </div>
      )
    }

    export default App
