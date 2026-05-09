import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar   from './components/Navbar.jsx'
import Footer   from './components/Footer.jsx'
import Home     from './pages/Home.jsx'
import About    from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact  from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/"        element={<Home />}     />
            <Route path="/about"   element={<About />}    />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />}  />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
