import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="8" fill="#1e2a4a" />
        <circle cx="10" cy="18" r="3" fill="#3b5bdb" />
        <circle cx="26" cy="10" r="3" fill="#00c6ff" />
        <circle cx="26" cy="26" r="3" fill="#3b5bdb" />
        <line x1="13" y1="18" x2="26" y2="10" stroke="#3b5bdb" strokeWidth="1.8" />
        <line x1="13" y1="18" x2="26" y2="26" stroke="#00c6ff" strokeWidth="1.8" />
        <line x1="26" y1="10" x2="26" y2="26" stroke="#6c8ef5" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
      <span className="font-display font-bold text-xl tracking-tight">
        <span className="text-brand-navy">techwith</span>
        <span className="text-brand-blue">chizi</span>
      </span>
    </Link>
  )
}

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link font-display font-medium text-sm transition-colors duration-150 ${
      isActive ? 'text-brand-blue active' : 'text-brand-navy hover:text-brand-blue'
    }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-white py-4'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={linkClass}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm">REQUEST QUOTE</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-brand-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to} end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-display font-medium text-base py-1 ${isActive ? 'text-brand-blue' : 'text-brand-navy'}`
                  }
                >{label}</NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm w-full text-center block">
                REQUEST QUOTE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
